package com.beecardia.client.api;

import com.beecardia.client.rest.Method;

/**
 * 20.02.14 16:52
 */
public class UpdateStudyRequest extends StudyUploadedRequest {
    @Override
    public Method getMethod() {
        return Method.UPDATE_STUDY;
    }
}
