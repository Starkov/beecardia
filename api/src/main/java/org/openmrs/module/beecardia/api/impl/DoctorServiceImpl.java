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
package org.openmrs.module.beecardia.api.impl;

import org.openmrs.api.impl.BaseOpenmrsService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.module.beecardia.Doctor;
import org.openmrs.module.beecardia.api.DoctorService;
import org.openmrs.module.beecardia.api.db.DoctorDAO;
import org.springframework.beans.factory.annotation.Autowired;


public class DoctorServiceImpl extends BaseOpenmrsService implements DoctorService {

    protected final Log log = LogFactory.getLog(this.getClass());
    @Autowired
    private DoctorDAO dao;

    /**
     * @param dao the dao to set
     */
    public void setDao(DoctorDAO dao) {
        this.dao = dao;
    }

    @Override
    public Doctor get(long id) {
        return dao.get(id);
    }

    @Override
    public void set(Doctor doctor) {
       dao.set(doctor);
    }


//
//    /**
//     * @return the dao
//     */
//    public DoctorDAO getDao() {
//        return dao;
//    }


}