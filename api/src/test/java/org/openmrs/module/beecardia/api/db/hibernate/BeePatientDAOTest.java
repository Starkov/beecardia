package org.openmrs.module.beecardia.api.db.hibernate;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.util.HibernateUtil;

import static junit.framework.Assert.assertNull;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class BeePatientDAOTest {
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
        patient.setId(4);
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
        assertEquals("woo", patientDAO.getById(1).getName());
    }

    @Test
    public void deletePatient() {
        BeePatient patient = patientDAO.getById(2);
        patientDAO.delete(patient);
        assertNull(patientDAO.getById(2));
    }
}
