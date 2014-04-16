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

import org.openmrs.BaseOpenmrsObject;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "bc_patients")
public class BeePatient extends BaseOpenmrsObject implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id_patient", unique = true, nullable = false)
    private Integer id;

    @Column(name = "patient_hash_id")
    private String patientHashId;

    @Column(name = "patient_name")
    private String name;

    @Column(name = "patient_first_name")
    private String firstName;

    @Column(name = "patient_middle_name")
    private String middleName;

    @Column(name = "patient_last_name")
    private String lastName;

    @Column(name = "patient_birth_year")
    private int birthYear;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "beePatientList")
    private List<BeeDoctor> beeDoctorList = new LinkedList<BeeDoctor>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "beePatient")
//    @Cascade(value = org.hibernate.annotations.CascadeType.REPLICATE)
    private List<BeeStudy> beeStudyList = new LinkedList<BeeStudy>();

    @Override
    public boolean equals(Object obj) {
        if (obj == this)
            return true;

     /* obj ссылается на null */

        if (obj == null)
            return false;

     /* Удостоверимся, что ссылки имеют тот же самый тип */

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
    public Integer getId() {
        return id;
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

    public String getPatientHashId() {
        return patientHashId;
    }

    public String getName() {
        return name;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public List<BeeDoctor> getBeeDoctorList() {
        return beeDoctorList;
    }

    public List<BeeStudy> getBeeStudyList() {
        return beeStudyList;
    }
}