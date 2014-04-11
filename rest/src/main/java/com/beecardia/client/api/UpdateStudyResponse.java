package com.beecardia.client.api;

/**
 * 20.02.14 16:52
 */
public class UpdateStudyResponse implements BeeResponse {
    private StudyPojo study;

    public StudyPojo getStudy() {
        return study;
    }

    public void setStudy(StudyPojo study) {
        this.study = study;
    }
}
