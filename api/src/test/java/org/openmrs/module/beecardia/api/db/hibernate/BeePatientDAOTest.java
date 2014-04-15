package org.openmrs.module.beecardia.api.db.hibernate;

import junit.framework.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static junit.framework.Assert.assertNull;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class BeePatientDAOTest extends BaseModuleContextSensitiveTest {

    private BeePatientService patientService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("dataset/beecardia-dataset.xml");
        patientService = Context.getService(BeePatientService.class);
    }

    @Test
    public void getPatientById() {
        assertNotNull(patientService.getById(1));
    }

    @Test
    public void getPatientByHashId() {
        assertNotNull(patientService.getByHashId("1patientHash"));
    }

    @Test
    public void getAllPatient() {
        for (BeePatient patient : patientService.getAll()) {
            System.out.println(patient.getName());
        }
        assertNotNull(patientService.getAll().get(0));
    }

    @Test
    public void setPatient() {
        BeePatient patient = new BeePatient();
        patient.setId(4);
        patient.setPatientHashId("4patientHash");
        patient.setName("Pasichnik Sergey");
        patient.setFirstName("Sergey");
        patient.setLastName("Pasichnik");
        BeeDoctor doctor = new BeeDoctor();
        doctor.setLogin("test");
        patient.getBeeDoctorList().add(doctor);
        patientService.save(patient);
        assertNotNull(patientService.getById(4));
    }

    @Test
    public void updatePatient() {
        BeePatient patient = patientService.getById(1);
        patient.setName("woo");
        patientService.update(patient);
        assertEquals("woo", patientService.getById(1).getName());
    }

    @Test
    public void deletePatient() {
        BeePatient patient = patientService.getById(2);
        patientService.delete(patient);
        assertNull(patientService.getById(2));
    }

    @Test
    public void getDoctorList() {
        BeePatient patient = patientService.getById(1);
        Assert.assertNotNull(patient.getBeeDoctorList());
    }


}
