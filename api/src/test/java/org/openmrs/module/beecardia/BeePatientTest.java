package org.openmrs.module.beecardia;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.module.beecardia.api.db.hibernate.BeePatientDAOImpl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class BeePatientTest {
    private SessionFactory sessionFactory;
    private Transaction tx;
    private BeePatientDAOImpl patientDAO;

    @Before
    public void setupDB() {
        sessionFactory = HibernateUtil.getSessionFactory();
        tx = sessionFactory.getCurrentSession().beginTransaction();
        patientDAO = new BeePatientDAOImpl();
        patientDAO.setSessionFactory(sessionFactory);
    }

    @After
    public void shotdownDB() {
        tx.rollback();
//        tx.commit();
    }


    @Test
    public void getPatientById() {
        assertNotNull(patientDAO.getById(1));
    }

    @Test
    public void getPatientByHashId() {
        assertNotNull(patientDAO.getByHashId("1patientHash"));
    }

    @Test
    public void getAllPatient() {
        assertNotNull(patientDAO.getAll());
    }

    @Test
    public void setPatient() {
        BeePatient patient = new BeePatient();
        patient.setId(3);
        patient.setHashId("3patientHash");
        patient.setName("Pasichnik Sergey");
        patient.setFirstName("Sergey");
        patient.setLastName("Pasichnik");
        patientDAO.set(patient);
        assertNotNull(patientDAO.getById(3));
    }

    @Test
    public void updatePatient() {
        BeePatient patient = patientDAO.getById(1);
        patient.setName("woo");
        patientDAO.update(patient);
        assertEquals("foo", patientDAO.getById(1).getName());
    }

    @Test
    public void deletePatient() {
//        BeePatient patient = patientDAO.getById(1);
//        patientDAO.delete(patient);
//        assertNull(patientDAO.getById(1));
    }
}