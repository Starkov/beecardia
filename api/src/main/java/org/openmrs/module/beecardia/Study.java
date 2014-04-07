package org.openmrs.module.beecardia;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "bc_studies")
public class Study {

    @Column(name = "study_hash_id")
    private String studyHashId;
    @Column(name = "patient_hash_id")
    private String patientHashId;
    @Column(name = "external_storage")
    private String externalStorage;

    public void setStudyHashId(String studyHashId) {
        this.studyHashId = studyHashId;
    }

    public void setPatientHashId(String patientHashId) {
        this.patientHashId = patientHashId;
    }

    public void setExternalStorage(String externalStorage) {
        this.externalStorage = externalStorage;
    }

    public String getStudyHashId() {
        return studyHashId;
    }

    public String getPatientHashId() {
        return patientHashId;
    }

    public String getExternalStorage() {
        return externalStorage;
    }
}
