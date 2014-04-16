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
        BeeDoctorService doctorService = Context.getService(BeeDoctorService.class);
        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeeStudyService studyService = Context.getService(BeeStudyService.class);
        BeecardiaSyncService syncService = Context.getService(BeecardiaSyncService.class);

        BeeDoctor doctor = new BeeDoctor();
        doctor.setLogin("testapi3@beecardia.com");
        doctor.setPassword("11111");
        doctorService.save(doctor);

        syncService.sync(doctor);

        int sizePatients = patientService.getAll().size();
        assertNotSame(0, sizePatients);

        int sizeStudies = studyService.getAll().size();
        assertNotSame(0, sizeStudies);

        BeeDoctor beeDoctor = doctorService.getByLogin("testapi3@beecardia.com");
        for (BeePatient p : beeDoctor.getBeePatientList()) {
            System.out.println(p.getId() + " " + p.getName());

        }
        List<BeePatient> patientList = patientService.getAll();
        for (BeePatient patient : patientList) {
            for (BeeStudy s : patient.getBeeStudyList()) {
                System.out.println(s.getStudyHashId() + " - " + s.getExternalStorage());
            }
        }
//        BeePatient beePatient = patientService.getById(1);
//        System.out.println(beePatient.getBeeStudyList().get(0).getExternalStorage() );
    }

    @Test
    public void syncAgain() throws BeeServiceException {
        BeeDoctorService doctorService = Context.getService(BeeDoctorService.class);
        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeeStudyService studyService = Context.getService(BeeStudyService.class);
        BeecardiaSyncService syncService = Context.getService(BeecardiaSyncService.class);

        BeeDoctor doctor = new BeeDoctor();
        doctor.setLogin("testapi3@beecardia.com");
        doctor.setPassword("11111");
        doctorService.save(doctor);

        syncService.sync(doctor);

        syncService.sync(doctor);


        BeeDoctor beeDoctor = doctorService.getByLogin("testapi3@beecardia.com");
        for (BeePatient p : beeDoctor.getBeePatientList()) {
            System.out.println(p.getId() + " " + p.getName());

        }
        List<BeePatient> patientList = patientService.getAll();
        for (BeePatient patient : patientList) {
            for (BeeStudy s : patient.getBeeStudyList()) {
                System.out.println(patient.getName() + " " + s.getStudyHashId() + " - " + s.getExternalStorage());
            }
        }

        int sizePatients = patientService.getAll().size();
        assertNotSame(0, sizePatients);

        int sizeStudies = studyService.getAll().size();
        assertNotSame(0, sizeStudies);
    }
}
