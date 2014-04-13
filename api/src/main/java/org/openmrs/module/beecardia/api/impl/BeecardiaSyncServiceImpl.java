package org.openmrs.module.beecardia.api.impl;

import org.openmrs.api.context.Context;
import org.openmrs.api.impl.BaseOpenmrsService;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.PatientExtractor;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.*;

import java.util.List;

public class BeecardiaSyncServiceImpl extends BaseOpenmrsService implements BeecardiaSyncService {
    @Override
    public void sync(String login, String pass) throws BeeServiceException {
        GetKeysRequest request = new GetKeysRequest(
                BeeCredentials.APPLICATION_KEY,
                "testapi3@beecardia.com",
                "11111");
        BeeServiceAPI beeServiceAPI = new BeeServiceAPI();
        GetKeysResponse keys = beeServiceAPI.getKeys(request);

        BeeCredentials credentials = new BeeCredentials();
        credentials.setAccessKey(keys.getAccessKey());
        credentials.setSecretKey(keys.getSecretKey());

        ListPatientsRequest patientsRequest = new ListPatientsRequest();
        patientsRequest.setBeeCredentials(credentials);

        ListPatientsResponse patientsResponse = beeServiceAPI.listPatients(patientsRequest);
        List<UserPojo> userPojoList = patientsResponse.getItems();
        BeePatientService patientService = Context.getService(BeePatientService.class);
        List<BeePatient> patientList = patientService.getAll();

        for (UserPojo user : userPojoList) {
            for (BeePatient patient : patientList) {
                if (user.getId() != (long) patient.getId()) {
                    Context.getService(BeePatientService.class).set(PatientExtractor.extract(user));
                }
            }
        }
    }

}
