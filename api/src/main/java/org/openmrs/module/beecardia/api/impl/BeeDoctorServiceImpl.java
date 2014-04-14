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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.module.beecardia.api.db.BeeDoctorDAO;

import java.util.List;


public class BeeDoctorServiceImpl extends BaseOpenmrsService implements BeeDoctorService {

    protected final Log log = LogFactory.getLog(this.getClass());
    private BeeDoctorDAO dao;

    public void setDao(BeeDoctorDAO dao) {
        this.dao = dao;
    }

    @Override
    public BeeDoctor get(int id) {
        return dao.get(id);
    }

    @Override
    public void set(BeeDoctor beeDoctor) {
        dao.set(beeDoctor);
    }

    @Override
    public void update(BeeDoctor beeDoctor) {
        dao.update(beeDoctor);
    }

    @Override
    public void delete(BeeDoctor beeDoctor) {
        dao.delete(beeDoctor);
    }

    @Override
    public List<BeeDoctor> getAll() {
        return dao.getAll();
    }

}