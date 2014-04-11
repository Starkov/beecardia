package com.beecardia.client.api;

/**
 * 30.01.14 11:04
 */
public class UpdateUserResponse implements BeeResponse {

    private UserPojo user;

    public UserPojo getUser() {
        return user;
    }

    public void setUser(UserPojo user) {
        this.user = user;
    }
}
