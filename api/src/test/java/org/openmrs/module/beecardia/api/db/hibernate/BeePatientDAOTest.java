package org.openmrs.module.beecardia.api.db.hibernate;

import junit.framework.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.service.BeeDoctorService;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static junit.framework.Assert.assertNotSame;
import static junit.framework.Assert.assertNull;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class BeePatientDAOTest extends BaseModuleContextSensitiveTest {

    private BeePatientService patientService;
    private BeeDoctorService doctorService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("dataset/beecardia-dataset.xml");
        patientService = Context.getService(BeePatientService.class);
        doctorService = Context.getService(BeeDoctorService.class);
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
        assertNotSame(0, patientService.getAll().size());
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
        BeeDoctor doctor = patient.getBeeDoctorList().get(0);

        patientService.delete(patient);

        assertNull(patientService.getById(2));
        Assert.assertNotNull(doctorService.getByLogin(doctor.getLogin()));
    }

    @Test
    public void getDoctorList() {
        BeePatient patient = patientService.getById(1);
        assertNotSame(0, patient.getBeeDoctorList().size());
    }

    @Test
    public void setPatient() {
        BeePatient patient = new BeePatient("4patientHash", "Pasichnik Sergey");
        BeeDoctor doctor = new BeeDoctor("test", "123asd");

        patient.setId(4);
        patient.getBeeDoctorList().add(doctor);
        doctor.getBeePatientList().add(patient);

        patientService.save(patient);

        assertNotNull(patientService.getById(4));
        Assert.assertTrue(doctorService.getByLogin("test").getBeePatientList().contains(patient));
    }

    @Test
    public void getPatientByOpenmrsId() throws Exception {
        Assert.assertNotNull(patientService.getByOpenmrsId(1));
    }
}
