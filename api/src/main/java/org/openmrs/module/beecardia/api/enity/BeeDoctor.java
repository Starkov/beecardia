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
package org.openmrs.module.beecardia.api.enity;

import org.hibernate.annotations.Cascade;
import org.openmrs.BaseOpenmrsObject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "bc_doctors")
public class BeeDoctor extends BaseOpenmrsObject implements Serializable {

    private int id;
    private String login;
    private String password;
    private List<BeePatient> beePatientList = new LinkedList<BeePatient>();

    public BeeDoctor() {
    }

    public BeeDoctor(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public void setLogin(String login) {
        this.login = login;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public void setBeePatientList(List<BeePatient> beePatientList) {
        this.beePatientList = beePatientList;
    }

    @Id
    @GeneratedValue
    @Column(name = "id_doctor", unique = true, nullable = false)
    public Integer getId() {
        return this.id;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Column(name = "login", nullable = false)
    public String getLogin() {
        return login;
    }

    @Column(name = "password", nullable = false)
    public String getPassword() {
        return password;
    }

    @ManyToMany(fetch = FetchType.LAZY)
    @Cascade(value = org.hibernate.annotations.CascadeType.ALL)
    @JoinTable(name = "bc_doctor_patient",
            joinColumns = {@JoinColumn(name = "id_doctor", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "id_patient", nullable = false)})
    public List<BeePatient> getBeePatientList() {
        return beePatientList;
    }
}