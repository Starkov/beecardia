package org.openmrs.module.beecardia.api.db.hibernate;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import java.util.List;

import static org.junit.Assert.*;


public class BeeDoctorDAOTest extends BaseModuleContextSensitiveTest {

    private BeeDoctorService doctorService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("dataset/beecardia-dataset.xml");
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
    public void getDoctorByLogin() {
        assertNotNull(doctorService.getByLogin("Doc first"));
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
        patient.setPatientHashId("3patientHash");
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

    @Test
    public void addPatientsToDoctor() {
        BeePatient patient1 = new BeePatient();
        BeePatient patient2 = new BeePatient();

        patient1.setId(111);
        patient1.setPatientHashId("1");
        patient2.setId(222);
        patient2.setPatientHashId("2");

        BeeDoctor doctor = new BeeDoctor();
        doctor.setId(777);
        doctor.setLogin("777");
        doctor.getBeePatientList().add(patient1);
        doctor.getBeePatientList().add(patient2);
        doctorService.save(doctor);

        BeeDoctor d = doctorService.getByLogin("777");
        System.out.println(d.getId() + " " + d.getLogin());
        List<BeePatient> patients = doctorService.getByLogin("777").getBeePatientList();
        for (BeePatient p : patients) {
            System.out.println(p.getId() + " " + p.getPatientHashId());
        }
        assertNotNull(patients);
        assertNotNull(Context.getService(BeePatientService.class).getById(111).getBeeDoctorList());

    }

}
