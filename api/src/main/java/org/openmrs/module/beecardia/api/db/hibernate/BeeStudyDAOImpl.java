/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
package org.openmrs.module.beecardia.api.db.hibernate;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.BeeStudy;
import org.openmrs.module.beecardia.api.db.BeeStudyDAO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BeeStudyDAOImpl implements BeeStudyDAO {

    protected final Log log = LogFactory.getLog(this.getClass());
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    @Override
    public void save(BeeStudy beeStudy) {
        Session session = sessionFactory.getCurrentSession();
        session.save(beeStudy);
        BeePatient patient = beeStudy.getBeePatient();
        patient.getBeeStudyList().add(beeStudy);
        session.update(patient);
    }

    @Override
    public void update(BeeStudy beeStudy) {
        Session session = sessionFactory.getCurrentSession();
        session.update(beeStudy);
    }

    @Override
    public void delete(BeeStudy beeStudy) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(beeStudy);
    }

    @Override
    public BeeStudy getById(Integer id) {
        Session session = sessionFactory.getCurrentSession();
        return (BeeStudy) session.get(BeeStudy.class, id);
    }

    @Override
    public List<BeeStudy> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from BeeStudy").list();
    }

}