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
package org.openmrs.module.beecardia;

import org.openmrs.BaseOpenmrsMetadata;
import org.openmrs.BaseOpenmrsObject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * It is a model class. It should extend either {@link BaseOpenmrsObject} or {@link BaseOpenmrsMetadata}.
 */
@Entity
@Table(name = "bc_doctors")
public class BeeDoctor extends BaseOpenmrsObject implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @Column(name = "login")
    private String login;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "bc_doctor_patient",
            joinColumns = {@JoinColumn(name = "id_patient", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "id", nullable = false, updatable = false)})
    private List<BeePatient> beePatientList;


    @Override
    public Integer getId() {
        return this.id;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getLogin() {
        return login;
    }

    public void setBeePatientList(List<BeePatient> beePatientList) {
        this.beePatientList = beePatientList;
    }

    public List<BeePatient> getBeePatientList() {
        return beePatientList;
    }
}