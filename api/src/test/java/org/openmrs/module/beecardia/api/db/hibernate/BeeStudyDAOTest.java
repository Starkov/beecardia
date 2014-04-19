package org.openmrs.module.beecardia.api.db.hibernate;


import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.enity.BeeStudy;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.module.beecardia.api.service.BeeStudyService;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static junit.framework.Assert.*;

public class BeeStudyDAOTest extends BaseModuleContextSensitiveTest {

    private BeeStudyService studyService;
    private BeePatientService patientService;

    @Before
    public void setupDB() throws Exception {
        executeDataSet("dataset/beecardia-dataset.xml");
        studyService = Context.getService(BeeStudyService.class);
        patientService = Context.getService(BeePatientService.class);
    }

    @Test
    public void getById() {
        assertNotNull(studyService.getById(1));
    }

    @Test
    public void saveStudy() {
        BeePatient patient = patientService.getById(3);
        BeeStudy study = new BeeStudy("6studyHash", "link to study 3", patient);
        study.setId(11);

        studyService.save(study);

        assertNotNull(studyService.getById(11));
        assertEquals("link to study 3", patientService.getById(3).getBeeStudyList().get(0).getExternalStorage());
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
        BeeStudy study = studyService.getById(10);
        studyService.delete(study);
        assertNull(studyService.getById(10));
        assertTrue(patientService.getAll().contains(study.getBeePatient()));
    }

    @Test
    public void getAllStudies() {
        assertNotNull(studyService.getAll());
    }
}
