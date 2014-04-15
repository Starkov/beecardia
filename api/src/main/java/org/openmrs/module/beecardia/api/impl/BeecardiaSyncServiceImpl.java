package org.openmrs.module.beecardia.api.impl;

import org.openmrs.api.context.Context;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.*;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.BeeStudyService;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.*;

import java.util.List;

public class BeecardiaSyncServiceImpl extends BaseOpenmrsService implements BeecardiaSyncService {

    @Override
    public void sync(String login, String pass, BeeDoctor doctor) throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, login, pass);
        BeeServiceAPI beeServiceAPI = new BeeServiceAPI();
        GetKeysResponse keys = beeServiceAPI.getKeys(request);

        BeeCredentials credentials = new BeeCredentials();
        credentials.setAccessKey(keys.getAccessKey());
        credentials.setSecretKey(keys.getSecretKey());

        ListPatientsRequest patientsRequest = new ListPatientsRequest();
        patientsRequest.setBeeCredentials(credentials);

        ListPatientsResponse patientsResponse = beeServiceAPI.listPatients(patientsRequest);
        List<UserPojo> userPojoList = patientsResponse.getItems();

        syncPatients(userPojoList, doctor);

        ListStudiesRequest studiesRequest = new ListStudiesRequest();
        studiesRequest.setBeeCredentials(credentials);

        ListStudiesResponse studiesResponse = beeServiceAPI.listCreatedStudies(studiesRequest);
        List<StudyPojo> studyPojoList = studiesResponse.getItems();

        syncStudy(studyPojoList);
    }

    private void syncPatients(List<UserPojo> userPojoList, BeeDoctor doctor) throws BeeServiceException {

        BeePatientService patientService = Context.getService(BeePatientService.class);
        List<BeePatient> patientList = patientService.getAll();

        if (patientList.isEmpty()) {
            for (UserPojo user : userPojoList) {
                patientService.save(PatientExtractor.extract(user));
                BeePatient patient = patientService.getByHashId(user.getHashId());
                patientService.addDoctor(patient.getId(), doctor);
            }
        }
        for (UserPojo user : userPojoList) {
            for (BeePatient patient : patientList) {
                if (!user.getHashId().equals(patient.getPatientHashId())) {
                    patientService.save(PatientExtractor.extract(user));
                    BeePatient pat = patientService.getByHashId(user.getHashId());
                    patientService.addDoctor(pat.getId(), doctor);
                }
            }
        }
    }

    private void syncStudy(List<StudyPojo> studyPojoList) throws BeeServiceException {

        BeeStudyService studyService = Context.getService(BeeStudyService.class);
        List<BeeStudy> studyList = studyService.getAll();
        BeePatientService patientService = Context.getService(BeePatientService.class);

        if (studyList.isEmpty()) {
            for (StudyPojo studyPojo : studyPojoList) {
                BeePatient patient = patientService.getByHashId(studyPojo.getPatientHashId());
                if (patient != null) {
                    BeeStudy study = StudyExtractor.extract(studyPojo, patient);
                    studyService.save(study);
                }
            }
            for (StudyPojo studyPojo : studyPojoList) {
                for (BeeStudy study : studyList) {
                    if (!studyPojo.getStudyHashId().equals(study.getBeePatient().getPatientHashId())) {
                        BeePatient patient = patientService.getByHashId(studyPojo.getPatientHashId());
                        studyService.save(StudyExtractor.extract(studyPojo, patient));
                    }
                }
            }
        }
    }
}