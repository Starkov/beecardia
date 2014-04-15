package org.openmrs.module.beecardia.api;

import org.openmrs.api.OpenmrsService;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.client.api.BeeServiceException;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface BeecardiaSyncService extends OpenmrsService {
    void sync(BeeDoctor doctor) throws BeeServiceException;
}
