package com.beecardia.client.api;

import com.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 25.11.13
 * Time: 15:02
 */
public class GetUserRequest implements BeeRequest {

    private BeeCredentials beeCredentials;

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
        return Method.GET_USER;
    }
}
