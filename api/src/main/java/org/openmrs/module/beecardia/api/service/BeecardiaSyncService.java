package org.openmrs.module.beecardia.api.service;

import org.openmrs.api.OpenmrsService;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.client.api.BeeServiceException;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BeecardiaSyncService extends OpenmrsService {
    void sync(BeeDoctor doctor) throws BeeServiceException;
}
