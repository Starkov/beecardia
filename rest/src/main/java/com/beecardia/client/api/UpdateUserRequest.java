package com.beecardia.client.api;

import com.beecardia.client.rest.Method;

/**
 * 30.01.14 11:03
 */
public class UpdateUserRequest extends SignupUserRequest {
    @Override
    public Method getMethod() {
        return Method.UPDATE_USER;
    }
}
