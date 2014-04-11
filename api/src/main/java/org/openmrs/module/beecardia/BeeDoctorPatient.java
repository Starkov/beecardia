package org.openmrs.module.beecardia;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: Tolik
 * Date: 11.04.14
 * Time: 16:56
 * To change this template use File | Settings | File Templates.
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
