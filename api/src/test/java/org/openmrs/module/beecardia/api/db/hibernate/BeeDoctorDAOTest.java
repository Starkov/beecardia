package org.openmrs.module.beecardia.api.db.hibernate;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.service.BeeDoctorService;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static org.junit.Assert.*;


public class BeeDoctorDAOTest extends BaseModuleContextSensitiveTest {

    private BeeDoctorService doctorService;
    private BeePatientService patientService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("dataset/beecardia-dataset.xml");
        doctorService = Context.getService(BeeDoctorService.class);
        patientService = Context.getService(BeePatientService.class);

    }

    @Test
    public void getBeeDoctorService() {
        assertNotNull(Context.getService(BeeDoctorService.class));
    }

    @Test
    public void getBeeDoctor() {
        assertNotNull(doctorService.get(1));
    }

    @Test
    public void getDoctorByLogin() {
        assertEquals("Doc first", doctorService.get(1).getLogin());
    }

    @Test
    public void getPatientsOfDoctor() {
        assertNotSame(0, doctorService.get(1).getBeePatientList().size());
    }

    @Test
    public void updateDoctor() {
        BeeDoctor doctor = doctorService.get(1);
        doctor.setLogin("www");
        doctorService.update(doctor);

        assertEquals("www", doctorService.get(1).getLogin());
    }

    @Test
    public void deleteDoctor() {
        doctorService.delete(doctorService.get(1));
        assertNull(doctorService.get(1));
    }

    @Test
    public void savePatientOfDoctor() {
        BeeDoctor doctor = doctorService.get(1);
        BeePatient patient = new BeePatient("8patientHash", "Pasichnik Sergey");

        doctor.getBeePatientList().add(patient);
        patient.getBeeDoctorList().add(doctor);

        patientService.save(patient);

        assertTrue(doctorService.get(1).getBeePatientList().contains(patient));
        assertTrue(patientService.getByHashId("8patientHash").getBeeDoctorList().contains(doctor));
    }
}
