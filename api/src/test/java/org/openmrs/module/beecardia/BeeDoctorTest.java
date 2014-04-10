package org.openmrs.module.beecardia;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.module.beecardia.api.db.hibernate.BeeDoctorDAOImpl;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;


public class BeeDoctorTest {
    private SessionFactory sessionFactory;
    private Transaction tx;
    private BeeDoctorDAOImpl doctorDAO;

    @Before
    public void setupDB() {
        sessionFactory = HibernateUtil.getSessionFactory();
        tx = sessionFactory.getCurrentSession().beginTransaction();
        doctorDAO = new BeeDoctorDAOImpl();
        doctorDAO.setSessionFactory(sessionFactory);
    }

    @After
    public void shotdownDB() {
        tx.rollback();
    }

    @Test
    public void getBeeDoctor() {
        assertNotNull(doctorDAO.get(1));
    }

    @Test
    public void compareDoctorLogin() {
        assertEquals("Doc first", doctorDAO.get(1).getLogin());
    }

    @Test
    public void getPatientsOfDoctor() {
        assertNotNull(doctorDAO.get(1).getBeePatientList());
    }


    @Test
    public void savePatientOfDoctor() {
        BeePatient patient = new BeePatient();
        patient.setId(3);
        patient.setHashId("3patientHash");
        patient.setName("Pasichnik Sergey");
        patient.setFirstName("Sergey");
        patient.setLastName("Pasichnik");

        BeeDoctor doctor = doctorDAO.get(1);
        List<BeePatient> patientList = doctor.getBeePatientList();

        patientList.add(patient);
        doctor.setBeePatientList(patientList);

        doctorDAO.update(doctor);
        assertNotNull(doctorDAO.get(1).getBeePatientList());
    }

}
