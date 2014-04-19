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
package org.openmrs.module.beecardia.api.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.api.dao.BeePatientDAO;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.service.BeePatientService;

import java.util.LinkedList;
import java.util.List;

public class BeePatientServiceImpl extends BaseOpenmrsService implements BeePatientService {

    protected final Log log = LogFactory.getLog(this.getClass());
    private BeePatientDAO dao;

    public void setDao(BeePatientDAO dao) {
        this.dao = dao;
    }

    @Override
    public BeePatient getById(int id) {
        return dao.getById(id);
    }

    @Override
    public BeePatient getByHashId(String hashId) {
        return dao.getByHashId(hashId);
    }

    @Override
    public void save(BeePatient beePatient) {
        dao.save(beePatient);
    }

    @Override
    public void update(BeePatient beePatient) {
        dao.update(beePatient);
    }

    @Override
    public void delete(BeePatient beePatient) {
        dao.delete(beePatient);
    }

    @Override
    public void addDoctor(int patientID, BeeDoctor doctor) {

        BeePatient patient = dao.getById(patientID);
        List<BeeDoctor> doctors = patient.getBeeDoctorList();

        if (doctors == null) {
            List<BeeDoctor> newDoctorList = new LinkedList<BeeDoctor>();
            newDoctorList.add(doctor);
            patient.setBeeDoctorList(newDoctorList);
        } else {
            doctors.add(doctor);
            patient.setBeeDoctorList(doctors);
        }
        dao.update(patient);
    }

    @Override
    public List<BeePatient> getAll() {
        return dao.getAll();
    }
}