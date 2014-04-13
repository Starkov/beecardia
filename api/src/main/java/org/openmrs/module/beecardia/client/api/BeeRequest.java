package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 9:25
 */
public interface BeeRequest {

    void setBeeCredentials(BeeCredentials beeCredentials);

    BeeCredentials getBeeCredentials();

    Method getMethod();
}
