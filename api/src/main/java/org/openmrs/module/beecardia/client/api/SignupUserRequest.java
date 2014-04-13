package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 12:36
 */
public class SignupUserRequest implements BeeRequest {

    public static final String DOCTOR_PATIENT_RELATION = "doctor_patient";

    private BeeCredentials beeCredentials;
    private String relation = DOCTOR_PATIENT_RELATION;
    private UserPojo user;

    @Override
    public BeeCredentials getBeeCredentials() {
        return beeCredentials;
    }

    @Override
    public void setBeeCredentials(BeeCredentials beeCredentials) {
        this.beeCredentials = beeCredentials;
    }

    @Override
    public Method getMethod() {
        return Method.SIGNUP_USER;
    }

    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public UserPojo getUser() {
        return user;
    }

    public void setUser(UserPojo user) {
        this.user = user;
    }
}
