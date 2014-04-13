package org.openmrs.module.beecardia.client.api;

import java.util.Date;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 8:50
 */
public class BeeCredentials {
    public static final String APPLICATION_KEY = "WEB_1_0";


    private String applicationKey = APPLICATION_KEY;
    private String accessKey;
    private String secretKey;
    private Date expires;

    public BeeCredentials() {
    }

    public BeeCredentials(String accessKey, String secretKey) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    public BeeCredentials(String accessKey, String secretKey, Date expires) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.expires = expires;
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

    public Date getExpires() {
        return expires;
    }

    public void setExpires(Date expires) {
        this.expires = expires;
    }

    public String getApplicationKey() {
        return applicationKey;
    }

    public void setApplicationKey(String applicationKey) {
        this.applicationKey = applicationKey;
    }
}
