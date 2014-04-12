package org.openmrs.module.beecardia;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * THIS CLASS IS ONLY FOR A TESTS
 * bc_docotrs many-to-many bc_patients
 */
@Entity
@Table(name = "bc_doctor_patient")
public class BeeDoctorPatient implements Serializable {
    @Id
    @Column(name = "id_doctor")
    private int idDocotr;
    @Id
    @Column(name = "id_patient")
    private int idPatient;

}
