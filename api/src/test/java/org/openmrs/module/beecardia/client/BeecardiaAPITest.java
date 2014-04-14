package org.openmrs.module.beecardia.client;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.*;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static org.junit.Assert.assertNotNull;

public class BeecardiaAPITest extends BaseModuleContextSensitiveTest {
    @Before
    public void setup() throws Exception {
        executeDataSet("api/src/test/resources/dataset/beecardia-dataset.xml");
    }

    @Test
    public void getConnectionTest() throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(BeeCredentials.APPLICATION_KEY, "testapi3@beecardia.com", "11111");
        BeeServiceAPI serviceAPI = new BeeServiceAPI();
        GetKeysResponse response = serviceAPI.getKeys(request);
        System.out.println(response.getAccessKey());
        assertNotNull(response.getAccessKey());
    }

    @Test
    public void syncPatient() throws BeeServiceException {
        BeecardiaSyncService syncService = Context.getService(BeecardiaSyncService.class);
        syncService.sync("testapi3@beecardia.com", "11111");
    }
}
