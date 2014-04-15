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
import org.hibernate.criterion.Restrictions;
import org.openmrs.module.beecardia.BeePatient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BeePatientDAOImpl implements org.openmrs.module.beecardia.api.db.BeePatientDAO {

    protected final Log log = LogFactory.getLog(this.getClass());
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public BeePatient getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return (BeePatient) session.get(BeePatient.class, id);
    }

    @Override
    public BeePatient getByHashId(String hashId) {
        Session session = sessionFactory.getCurrentSession();
        BeePatient result = (BeePatient) session.createCriteria(BeePatient.class)
                .add(Restrictions.eq("patientHashId", hashId)).uniqueResult();
        return result;
    }

    @Override
    public void save(BeePatient beePatient) {
        Session session = sessionFactory.getCurrentSession();
        session.save(beePatient);
    }

    @Override
    public void update(BeePatient beePatient) {
        Session session = sessionFactory.getCurrentSession();
        session.update(beePatient);
    }

    @Override
    public void delete(BeePatient beePatient) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(beePatient);
    }

    @Override
    public List<BeePatient> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<BeePatient>) session.createQuery("from BeePatient ").list();
    }
}