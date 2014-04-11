package com.beecardia.client.api;

import com.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 9:19
 */
public class PrepareStudyUploadRequest implements BeeRequest {

    public static final String AMAZON_S3_SERVICE = "AmazonS3";

    private String uploadService = AMAZON_S3_SERVICE;
    private BeeCredentials beeCredentials;

    public PrepareStudyUploadRequest() {
    }

    public PrepareStudyUploadRequest(String uploadService) {
        this.uploadService = uploadService;
    }

    public String getUploadService() {
        return uploadService;
    }

    public void setUploadService(String uploadService) {
        this.uploadService = uploadService;
    }

    @Override
    public void setBeeCredentials(BeeCredentials beeCredentials) {
        this.beeCredentials = beeCredentials;
    }

    @Override
    public BeeCredentials getBeeCredentials() {
        return beeCredentials;
    }

    @Override
    public Method getMethod() {
        return Method.STUDY_PREPARE_UPLOAD;
    }
}
