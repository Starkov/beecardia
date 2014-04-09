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
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.db.BeePatientDAO;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * It is a default implementation of {@link org.openmrs.module.beecardia.api.BeePatientService}.
 */
public class BeePatientServiceImpl extends BaseOpenmrsService implements BeePatientService {

    protected final Log log = LogFactory.getLog(this.getClass());

    @Autowired(required = true)
    private BeePatientDAO dao;

    @Override
    public BeePatient getById(int id) {
        return dao.getById(id);
    }

    @Override
    public void set(BeePatient beePatient) {
        dao.set(beePatient);
    }

    @Override
    public List<BeePatient> getAll() {
        return dao.getAll();
    }
}