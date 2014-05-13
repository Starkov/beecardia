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
import java.util.Date;

@Entity
@Table(name = "bc_studies")
public class BeeStudy extends BaseOpenmrsObject implements Serializable {

    private Integer id;
    private Date studyDate;
    private String studyHashId;
    private String externalStorage;
    private BeePatient beePatient;

    public BeeStudy() {
    }

    public BeeStudy(Date studyDate, String studyHashId, String externalStorage, BeePatient beePatient) {
        this.studyDate = studyDate;
        this.studyHashId = studyHashId;
        this.externalStorage = externalStorage;
        this.beePatient = beePatient;
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
            BeeStudy tmp = (BeeStudy) obj;
            if (tmp.studyHashId.equals(this.studyHashId))
                return true;
            else
                return false;
        }
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public void setStudyDate(Date studyDate) {
        this.studyDate = studyDate;
    }

    public void setStudyHashId(String studyHashId) {
        this.studyHashId = studyHashId;
    }

    public void setBeePatient(BeePatient beePatient) {
        this.beePatient = beePatient;
    }

    public void setExternalStorage(String externalStorage) {
        this.externalStorage = externalStorage;
    }

    @Id
    @GeneratedValue
    @Column(name = "id_study", unique = true, nullable = false)
    public Integer getId() {
        return id;
    }

    @Column(name = "study_date", nullable = false)
    public Date getStudyDate() {
        return studyDate;
    }

    @Column(name = "study_hash_id", nullable = false)
    public String getStudyHashId() {
        return studyHashId;
    }

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = BeePatient.class)
    @JoinColumn(name = "patient_hash_id", referencedColumnName = "patient_hash_id", nullable = false)
    @Cascade(value = org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    public BeePatient getBeePatient() {
        return beePatient;
    }

    @Column(name = "external_storage", nullable = false)
    public String getExternalStorage() {
        return externalStorage;
    }
}