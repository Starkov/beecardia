package org.openmrs.module.beecardia.api.db.hibernate;


import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeePatient;
import org.openmrs.module.beecardia.BeeStudy;
import org.openmrs.module.beecardia.api.BeePatientService;
import org.openmrs.module.beecardia.api.BeeStudyService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static junit.framework.Assert.*;

public class BeeStudyDAOTest extends BaseModuleContextSensitiveTest {

    private BeeStudyService studyService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("api/src/test/resources/dataset/beecardia-dataset.xml");
        studyService = Context.getService(BeeStudyService.class);
    }

    @Test
    public void getById() {
        assertNotNull(studyService.getById(1));
    }

    @Test
    public void saveStudy() {
        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeePatient patient = patientService.getById(1);

        BeeStudy study = new BeeStudy();
        study.setId(10);
        study.setBeePatient(patient);
        study.setExternalStorage("link to study 3");

        studyService.set(study);
        assertNotNull(studyService.getById(10));
    }

    @Test
    public void updateStydy() {
        BeeStudy study = studyService.getById(1);
        study.setExternalStorage("link");
        studyService.update(study);

        assertEquals("link", studyService.getById(1).getExternalStorage());
    }

    @Test
    public void deleteStudy() {
        studyService.delete(studyService.getById(10));
        assertNull(studyService.getById(10));
    }

    @Test
    public void getAllStudies() {
        assertNotNull(studyService.getAll());
    }
}
