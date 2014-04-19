package org.openmrs.module.beecardia.api.util;


import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.client.api.UserPojo;

public class PatientExtractor {

    public static BeePatient extract(UserPojo userPojo) {

        BeePatient patient = new BeePatient();

        patient.setPatientHashId(userPojo.getHashId());
        patient.setName(userPojo.getName());
        patient.setFirstName(userPojo.getFirstName());
        patient.setMiddleName(userPojo.getMiddleName());
        patient.setLastName(userPojo.getLastName());
        patient.setBirthYear(userPojo.getBirthYear());

        return patient;
    }
}
