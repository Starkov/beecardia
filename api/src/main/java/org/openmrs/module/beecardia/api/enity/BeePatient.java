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
import org.hibernate.annotations.CascadeType;
import org.openmrs.BaseOpenmrsObject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "bc_patients")
public class BeePatient extends BaseOpenmrsObject implements Serializable {

    private Integer id;
    private String patientHashId;
    private String name;
    private String firstName;
    private String middleName;
    private String lastName;
    private int birthYear;
    private List<BeeDoctor> beeDoctorList = new LinkedList<BeeDoctor>();
    private List<BeeStudy> beeStudyList = new LinkedList<BeeStudy>();

    public BeePatient() {
    }

    public BeePatient(String patientHashId, String name) {
        this.patientHashId = patientHashId;
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this)
            return true;
        if (obj == null)
            return false;
        if (!(getClass() == obj.getClass()))
            return false;
        else {
            BeePatient tmp = (BeePatient) obj;
            if (tmp.patientHashId.equals(this.getPatientHashId()))
                return true;
            else
                return false;
        }
    }


    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public void setPatientHashId(String patientHashId) {
        this.patientHashId = patientHashId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public void setBeeDoctorList(List<BeeDoctor> beeDoctorList) {
        this.beeDoctorList = beeDoctorList;
    }

    public void setBeeStudyList(List<BeeStudy> beeStudyList) {
        this.beeStudyList = beeStudyList;
    }

    @Id
    @GeneratedValue
    @Column(name = "id_patient", unique = true, nullable = false)
    public Integer getId() {
        return id;
    }

    @Column(name = "patient_hash_id", nullable = false)
    public String getPatientHashId() {
        return patientHashId;
    }

    @Column(name = "patient_name", nullable = false)
    public String getName() {
        return name;
    }

    @Column(name = "patient_first_name")
    public String getFirstName() {
        return firstName;
    }

    @Column(name = "patient_middle_name")
    public String getMiddleName() {
        return middleName;
    }

    @Column(name = "patient_last_name")
    public String getLastName() {
        return lastName;
    }

    @Column(name = "patient_birth_year")
    public int getBirthYear() {
        return birthYear;
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "beePatientList")
    @Cascade(value = {CascadeType.SAVE_UPDATE})
    public List<BeeDoctor> getBeeDoctorList() {
        return beeDoctorList;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "beePatient")
    @Cascade(value = CascadeType.ALL)
    public List<BeeStudy> getBeeStudyList() {
        return beeStudyList;
    }
}