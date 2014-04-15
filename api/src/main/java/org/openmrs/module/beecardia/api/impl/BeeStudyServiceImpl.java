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
import org.openmrs.module.beecardia.BeeStudy;
import org.openmrs.module.beecardia.api.BeeStudyService;
import org.openmrs.module.beecardia.api.db.BeeStudyDAO;

import java.util.List;

public class BeeStudyServiceImpl extends BaseOpenmrsService implements BeeStudyService {

    protected final Log log = LogFactory.getLog(this.getClass());
    private BeeStudyDAO dao;

    public void setDao(BeeStudyDAO dao) {
        this.dao = dao;
    }

    @Override
    public void save(BeeStudy beeStudy) {
        dao.save(beeStudy);
    }

    @Override
    public void update(BeeStudy beeStudy) {
        dao.update(beeStudy);
    }

    @Override
    public void delete(BeeStudy beeStudy) {
        dao.delete(beeStudy);
    }

    @Override
    public BeeStudy getById(Integer id) {
        return dao.getById(id);
    }

    @Override
    public List<BeeStudy> getAll() {
        return dao.getAll();
    }
}