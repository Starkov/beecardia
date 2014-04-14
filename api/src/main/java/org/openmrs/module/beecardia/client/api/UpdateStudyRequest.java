package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * 20.02.14 16:52
 */
public class UpdateStudyRequest extends StudyUploadedRequest {
    @Override
    public Method getMethod() {
        return Method.UPDATE_STUDY;
    }
}
