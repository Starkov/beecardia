package org.openmrs.module.beecardia.api.impl;

import org.openmrs.module.beecardia.Study;
import org.openmrs.module.beecardia.api.StudyService;
import org.openmrs.module.beecardia.api.db.StudyDAO;

import java.util.List;

public class StudyServiceImpl implements StudyService {

    private StudyDAO dao;

    public void setDao(StudyDAO dao) {
        this.dao = dao;
    }

    public StudyDAO getDao() {
        return dao;
    }

    @Override
    public Study getByHashId(String hashId) {
        return null;
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
