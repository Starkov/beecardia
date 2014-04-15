package org.openmrs.module.beecardia.client;

import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.BeeStudy;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.BeeStudyService;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.*;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;

public class BeecardiaAPITest extends BaseModuleContextSensitiveTest {
//    @Before
//    public void setup() throws Exception {
//        executeDataSet("api/src/test/resources/dataset/beecardia-dataset.xml");
//    }

    @Test
    public void getConnectionTest() throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, "testapi3@beecardia.com", "11111");
        BeeServiceAPI serviceAPI = new BeeServiceAPI();
        GetKeysResponse response = serviceAPI.getKeys(request);
        System.out.println(response.getAccessKey());
        assertNotNull(response.getAccessKey());
    }

    @Test
    public void test() throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, "testapi3@beecardia.com", "11111");
        BeeServiceAPI serviceAPI = new BeeServiceAPI();
        GetKeysResponse keys = serviceAPI.getKeys(request);

        BeeCredentials credentials = new BeeCredentials();
        credentials.setAccessKey(keys.getAccessKey());
        credentials.setSecretKey(keys.getSecretKey());

        ListPatientsRequest patientsRequest = new ListPatientsRequest();
        patientsRequest.setBeeCredentials(credentials);

        ListPatientsResponse patientsResponse = serviceAPI.listPatients(patientsRequest);
        List<UserPojo> userPojoList = patientsResponse.getItems();

        for (UserPojo user : userPojoList) {
            System.out.println(user.getId() + " - " + user.getHashId() + " - " + user.getName() + " - " + user.getFirstName() + " - " + user.getMiddleName() + " - " + user.getLastName() + " - " + user.getBirthYear());
        }

        ListStudiesRequest studiesRequest = new ListStudiesRequest();
        studiesRequest.setBeeCredentials(credentials);

        ListStudiesResponse studiesResponse = serviceAPI.listCreatedStudies(studiesRequest);
        List<StudyPojo> studyPojoList = studiesResponse.getItems();

        for (StudyPojo study : studyPojoList) {
            System.out.println(study.getStudyHashId() + " - " + study.getPatientHashId() + " - " + study.getExternalLink());
        }


    }

    @Test
    public void syncService() throws BeeServiceException {
        BeecardiaSyncService syncService = Context.getService(BeecardiaSyncService.class);

        BeeDoctor doctor = new BeeDoctor();
        doctor.setLogin("test");

        Context.getService(BeeDoctorService.class).save(doctor);
        syncService.sync("testapi3@beecardia.com", "11111", doctor);

        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeeStudyService studyService = Context.getService(BeeStudyService.class);

//        List<BeePatient> patientList = Context.getService(BeePatientService.class).getAll();
//        for (BeePatient patient : patientList){
//            System.out.println(patient.getId()+" "+patient.getName());
//        }

        int sizePatients = patientService.getAll().size();
        assertNotSame(0, sizePatients);

        int sizeStudies = studyService.getAll().size();
        assertNotSame(0, sizeStudies);

//        List<BeeStudy> studyList = studyService.getAll();
//        for(BeeStudy study : studyList){
//            System.out.println(study.getStudyHashId()+" - "+study.getExternalStorage());
//        }

        BeeDoctor beeDoctor = Context.getService(BeeDoctorService.class).getByLogin("test");
        for (BeePatient p : beeDoctor.getBeePatientList()) {
            System.out.println(p.getId() + " " + p.getName());
            for (BeeStudy s : p.getBeeStudyList()) {
                System.out.println(s.getStudyHashId() + " - " + s.getExternalStorage());
            }
        }

//        assertNotNull(studyList);
    }
}
