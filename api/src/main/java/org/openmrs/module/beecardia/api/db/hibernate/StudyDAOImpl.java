package org.openmrs.module.beecardia.api.db.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.openmrs.module.beecardia.api.db.StudyDAO;
import org.openmrs.module.beecardia.Study;

import java.util.List;

public class StudyDAOImpl implements StudyDAO {

    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    @Override
    public Study getByHashId(String hashId) {
        Session session = sessionFactory.getCurrentSession();
        Study study = (Study) session.load(Study.class, hashId);
        return study;
    }

    @Override
    public List<Study> getStudyList() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void save(Study s) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void saveList(List<Study> studies) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void update(Study study) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void delete(String hashId) {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
