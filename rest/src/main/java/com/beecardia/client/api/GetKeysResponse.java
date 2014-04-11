package com.beecardia.client.api;

import java.util.Date;

/**
 * User: xmitya
 * Date: 13.11.13
 * Time: 15:04
 */
public class GetKeysResponse implements BeeResponse {

    private String applicationKey;
    private String accessKey;
    private String secretKey;
    private Date expired;

    public GetKeysResponse() {
    }

    public GetKeysResponse(String accessKey, String secretKey) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    public String getAccessKey() {
        return accessKey;
    }

    public void setAccessKey(String accessKey) {
        this.accessKey = accessKey;
    }

    public String getSecretKey() {
        return secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    public Date getExpired() {
        return expired;
    }

    public void setExpired(Date expired) {
        this.expired = expired;
    }

    public String getApplicationKey() {
        return applicationKey;
    }

    public void setApplicationKey(String applicationKey) {
        this.applicationKey = applicationKey;
    }
}
