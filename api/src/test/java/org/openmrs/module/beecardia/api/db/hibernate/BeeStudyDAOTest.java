package org.openmrs.module.beecardia.api.db.hibernate;


import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.BeeStudy;
import org.openmrs.module.beecardia.util.HibernateUtil;

import static junit.framework.Assert.*;

public class BeeStudyDAOTest {

    private SessionFactory sessionFactory;
    private Transaction tx;
    private BeeStudyDAOImpl studyDAO;

    @Before
    public void setupDB() {
        sessionFactory = HibernateUtil.getSessionFactory();
        tx = sessionFactory.getCurrentSession().beginTransaction();
        studyDAO = new BeeStudyDAOImpl();
        studyDAO.setSessionFactory(sessionFactory);
    }

    @After
    public void shotdownDB() {
        tx.rollback();
//        tx.commit();
    }

    @Test
    public void getById() {
        assertNotNull(studyDAO.getById(1));
    }

    @Test
    public void saveStudy() {
        BeePatientDAOImpl patientDAO = new BeePatientDAOImpl();
        patientDAO.setSessionFactory(sessionFactory);
        BeePatient patient = patientDAO.getById(1);

        BeeStudy study = new BeeStudy();
        study.setId(10);
        study.setBeePatient(patient);
        study.setExternalStorage("link to study 3");

        studyDAO.set(study);
        assertNotNull(studyDAO.getById(10));
    }

    @Test
    public void updateStydy() {
        BeeStudy study = studyDAO.getById(1);
        study.setExternalStorage("link");
        studyDAO.update(study);

        assertEquals("link", studyDAO.getById(1).getExternalStorage());
    }

    @Test
    public void deleteStudy() {
        studyDAO.delete(studyDAO.getById(10));
        assertNull(studyDAO.getById(10));
    }

    @Test
    public void getAllStudies() {
        assertNotNull(studyDAO.getAll());
    }
}
