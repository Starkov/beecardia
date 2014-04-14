package org.openmrs.module.beecardia.api.db.hibernate;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import java.util.List;

import static org.junit.Assert.*;


public class BeeDoctorDAOTest extends BaseModuleContextSensitiveTest {

    private BeeDoctorService doctorService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("api/src/test/resources/dataset/beecardia-dataset.xml");
        doctorService = Context.getService(BeeDoctorService.class);
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
    public void compareDoctorLogin() {
        assertEquals("Doc first", doctorService.get(1).getLogin());
    }

    @Test
    public void getPatientsOfDoctor() {
        assertNotNull(doctorService.get(1).getBeePatientList());
    }


    @Test
    public void savePatientOfDoctor() {
        BeePatient patient = new BeePatient();
        patient.setId(3);
        patient.setHashId("3patientHash");
        patient.setName("Pasichnik Sergey");
        patient.setFirstName("Sergey");
        patient.setLastName("Pasichnik");

        BeeDoctor doctor = doctorService.get(1);
        List<BeePatient> patientList = doctor.getBeePatientList();

        patientList.add(patient);
        doctor.setBeePatientList(patientList);

        doctorService.update(doctor);
        assertNotNull(doctorService.get(1).getBeePatientList());
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

}
