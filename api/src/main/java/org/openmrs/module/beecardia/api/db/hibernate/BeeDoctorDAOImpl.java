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
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.api.db.BeeDoctorDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class BeeDoctorDAOImpl implements BeeDoctorDAO {
    protected final Log log = LogFactory.getLog(this.getClass());

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public BeeDoctor get(int id) {
        Session session = sessionFactory.getCurrentSession();
        return (BeeDoctor) session.get(BeeDoctor.class, id);
    }

    @Override
    public void set(BeeDoctor beeDoctor) {
        Session session = sessionFactory.getCurrentSession();
        session.save(beeDoctor);
    }

    @Override
    public List<BeeDoctor> getAll() {
        Session session = sessionFactory.getCurrentSession();
        return (List<BeeDoctor>) session.createQuery("from bc_doctors").list();
    }

    //    /**
//     * @param sessionFactory the sessionFactory to set
//     */
//    public void setSessionFactory(SessionFactory sessionFactory) {
//        this.sessionFactory = sessionFactory;
//    }
//
//    /**
//     * @return the sessionFactory
//     */
//    public SessionFactory getSessionFactory() {
//        return sessionFactory;
//    }


}