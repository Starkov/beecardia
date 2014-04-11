package com.beecardia.client;

import com.beecardia.client.api.*;
import org.junit.Test;

import static junit.framework.Assert.assertNotNull;

public class RestClientTest {
    @Test
    public void getConnect() throws BeeServiceException {
        BeeServiceAPI service = new BeeServiceAPI();
        GetKeysRequest keysRequest = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, "testapi3@beecardia.com", "11111");

        GetKeysResponse keysResponse = service.getKeys(keysRequest);
        System.out.print(keysResponse.getAccessKey());
        assertNotNull(keysResponse);
    }
}
