package org.openmrs.module.beecardia.client.rest;

/**
 * User: xmitya
 * Date: 06.11.13
 * Time: 11:28
 */
public enum Method {
    // regular methods require HTTP POST method
    GET_USER("get_user"),
    GET_API_KEYS("get_api_keys"),
    STUDY_UPLOADED("study_uploaded"),
    STUDY_PREPARE_UPLOAD("study_prepare_upload"),
    SIGNUP_USER("signup_user"),
    LIST_PATIENTS("list_patients"),
    LIST_DOCTOR_STUDIES("list_doctor_studies"),
    LIST_CREATED_STUDIES("list_created_studies"),
    LIST_PATIENT_STUDIES("list_patient_studies"),
    DELETE_USER("delete_user"),

    // update methods, require HTTP UPDATE, not POST!
    UPDATE_USER("update_user"),
    UPDATE_STUDY("update_study");

    private String method;

    private Method(String method) {
        this.method = method;
    }

    public String getMethod() {
        return method;
    }

    public String getHttpMethod() {
        if (this == UPDATE_USER || this == UPDATE_STUDY) {
            return "UPDATE";
        }
        return "POST";
    }
}
