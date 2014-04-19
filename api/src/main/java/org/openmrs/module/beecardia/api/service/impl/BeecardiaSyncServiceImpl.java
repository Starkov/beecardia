package org.openmrs.module.beecardia.api.service.impl;

import org.openmrs.api.context.Context;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.enity.BeeStudy;
import org.openmrs.module.beecardia.api.service.BeeDoctorService;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.module.beecardia.api.service.BeeStudyService;
import org.openmrs.module.beecardia.api.service.BeecardiaSyncService;
import org.openmrs.module.beecardia.api.util.PatientExtractor;
import org.openmrs.module.beecardia.api.util.StudyExtractor;
import org.openmrs.module.beecardia.client.api.*;

import java.util.List;

public class BeecardiaSyncServiceImpl extends BaseOpenmrsService implements BeecardiaSyncService {


    @Override
    public void sync(BeeDoctor doctor) throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(
                BeeCredentials.APPLICATION_KEY, doctor.getLogin(), doctor.getPassword());
        BeeServiceAPI beeServiceAPI = new BeeServiceAPI();
        GetKeysResponse keys = beeServiceAPI.getKeys(request);

        BeeCredentials credentials = new BeeCredentials();
        credentials.setAccessKey(keys.getAccessKey());
        credentials.setSecretKey(keys.getSecretKey());

        ListPatientsRequest patientsRequest = new ListPatientsRequest();
        patientsRequest.setBeeCredentials(credentials);

        ListPatientsResponse patientsResponse = beeServiceAPI.listPatients(patientsRequest);
        List<UserPojo> userPojoList = patientsResponse.getItems();

        ListStudiesRequest studiesRequest = new ListStudiesRequest();
        studiesRequest.setBeeCredentials(credentials);

        ListStudiesResponse studiesResponse = beeServiceAPI.listCreatedStudies(studiesRequest);
        List<StudyPojo> studyPojoList = studiesResponse.getItems();

        sync(userPojoList, studyPojoList, doctor);
    }

    private void sync(List<UserPojo> userPojoList, List<StudyPojo> studyPojoList, BeeDoctor doc) throws BeeServiceException {
        BeeDoctorService doctorService = Context.getService(BeeDoctorService.class);
        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeeStudyService studyService = Context.getService(BeeStudyService.class);

        BeeDoctor doctor = doctorService.getByLogin(doc.getLogin());
        if (doctor.getBeePatientList().size() == 0) {
            for (UserPojo user : userPojoList) {
                doctor.getBeePatientList().add(PatientExtractor.extract(user));
            }
            doctorService.update(doctor);
        } else {
            List<BeePatient> beePatients = doctor.getBeePatientList();

            for (UserPojo user : userPojoList) {
                BeePatient patient = PatientExtractor.extract(user);
                if (!beePatients.contains(patient)) {
                    beePatients.add(patient);
                    doctor.setBeePatientList(beePatients);
                    doctorService.update(doctor);
                }
            }

        }


        for (StudyPojo studyPojo : studyPojoList) {
            BeePatient patient = patientService.getByHashId(studyPojo.getPatientHashId());
            if (patient != null) {
                BeeStudy study = StudyExtractor.extract(studyPojo, patient);
                if (!patient.getBeeStudyList().contains(study)) {
                    studyService.save(study);
                }
            }

        }

    }
}