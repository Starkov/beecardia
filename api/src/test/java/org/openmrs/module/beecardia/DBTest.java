package org.openmrs.module.beecardia;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static junit.framework.Assert.assertNotNull;

public class DBTest extends BaseModuleContextSensitiveTest {
    @Before
    public void setuo() throws Exception {
        executeDataSet("api/src/test/resources/bc_doctors-dataset.xml");
    }

    /**
     * Override method to set custom properties/features
     */
//    protected void setUpDatabaseConfig(DatabaseConfig config) {
//        Map<String,String> map = new HashMap<String, String>();
//        map.put("id_doctor","id_patient");
//        config.setProperty("http://www.dbunit.org/properties/primaryKeyFilter",
//                new MyPrimaryKeyFilter(map));
//    }
    @Test
    public void test() {
        BeeDoctorService doctorService = Context.getService(BeeDoctorService.class);
        for (BeePatient patient : doctorService.get(2).getBeePatientList()) {
            System.out.println(patient.getLastName());
            for (BeeStudy study : patient.getBeeStudyList()) {
                System.out.println(study.getExternalStorage());
            }

        }
        assertNotNull(doctorService.get(2).getBeePatientList().get(0));
    }

}
