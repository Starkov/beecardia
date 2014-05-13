package org.openmrs.module.beecardia.client;

import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.enity.BeeStudy;
import org.openmrs.module.beecardia.api.service.BeeDoctorService;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.module.beecardia.api.service.BeeStudyService;
import org.openmrs.module.beecardia.api.service.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.*;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;

public class BeecardiaAPITest extends BaseModuleContextSensitiveTest {


    @Test
    public void getConnectionTest() throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, "testapi3@beecardia.com", "11111");
        BeeServiceAPI serviceAPI = new BeeServiceAPI();
        GetKeysResponse response = serviceAPI.getKeys(request);
        assertNotNull(response.getAccessKey());
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

        for (BeeStudy s : studyService.getAll()) {
            System.out.println(s.getBeePatient().getName() + "-" + s.getExternalStorage());
        }

        assertNotSame(0, patientService.getAll().size());
        assertNotSame(0, studyService.getAll().size());
    }

    @Test
    public void syncTwice() throws BeeServiceException {
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

        assertNotSame(0, patientService.getAll().size());
        assertNotSame(0, studyService.getAll().size());
    }
}
