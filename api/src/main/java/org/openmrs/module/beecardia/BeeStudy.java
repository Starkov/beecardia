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

/**
 * It is a model class. It should extend either {@link org.openmrs.BaseOpenmrsObject} or {@link org.openmrs.BaseOpenmrsMetadata}.
 */

@Entity
@Table(name = "bc_studies")
public class BeeStudy extends BaseOpenmrsObject implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id_study", unique = true, nullable = false)
    private Integer id;

    @Column(name = "external_storage")
    private String externalStorage;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = BeePatient.class)
    @JoinColumn(name = "patient_hash_id", referencedColumnName = "patient_hash_id", nullable = false)
    private BeePatient beePatient;

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public void setBeePatient(BeePatient beePatient) {
        this.beePatient = beePatient;
    }

    public void setExternalStorage(String externalStorage) {
        this.externalStorage = externalStorage;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public BeePatient getBeePatient() {
        return beePatient;
    }

    public String getExternalStorage() {
        return externalStorage;
    }
}