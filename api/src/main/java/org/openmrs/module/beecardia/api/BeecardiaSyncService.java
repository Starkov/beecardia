package org.openmrs.module.beecardia.api;

import org.openmrs.api.OpenmrsService;
import org.openmrs.module.beecardia.client.api.BeeServiceException;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BeecardiaSyncService extends OpenmrsService {
    void sync(String login, String pass) throws BeeServiceException;
}
