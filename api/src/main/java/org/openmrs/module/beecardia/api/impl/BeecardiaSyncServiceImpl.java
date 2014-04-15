package org.openmrs.module.beecardia.api.impl;

import org.openmrs.api.context.Context;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.*;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.BeeStudyService;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
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
            for (UserPojo user : userPojoList) {
                for (BeePatient patient : doctor.getBeePatientList()) {
                    if (!user.getHashId().equals(patient.getPatientHashId())) {
                        doctor.getBeePatientList().add(PatientExtractor.extract(user));
                    }
                }
            }
            doctorService.update(doctor);
        }
        for (StudyPojo studyPojo : studyPojoList) {
            for (BeePatient patient : patientService.getAll()) {
                if (patient.getPatientHashId().equals(studyPojo.getPatientHashId())) {
                    BeeStudy study = StudyExtractor.extract(studyPojo, patient);
                    studyService.save(study);
                }
            }
        }
    }
}