package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 15:46
 */
public class StudyUploadedRequest implements BeeRequest {

    private BeeCredentials beeCredentials;
    private StudyPojo study;

    public StudyPojo getStudy() {
        return study;
    }

    public void setStudy(StudyPojo study) {
        this.study = study;
    }

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
        return Method.STUDY_UPLOADED;
    }


}
