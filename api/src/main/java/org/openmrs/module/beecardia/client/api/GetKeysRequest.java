package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 13.11.13
 * Time: 15:08
 */
public class GetKeysRequest implements BeeRequest {

    private String applicationKey;
    private String email;
    private String password;
    private String passwordHash;
    private BeeCredentials beeCredentials;

    public GetKeysRequest(String applicationKey, String email, String password) {
        this.applicationKey = applicationKey;
        this.email = email;
        this.password = password;
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
        return Method.GET_API_KEYS;
    }

    public String getApplicationKey() {
        return applicationKey;
    }

    public void setApplicationKey(String applicationKey) {
        this.applicationKey = applicationKey;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /* package */ String getPasswordHash() {
        return passwordHash;
    }

    /* package */ void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
