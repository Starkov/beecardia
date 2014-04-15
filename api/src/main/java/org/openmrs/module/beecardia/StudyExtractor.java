package org.openmrs.module.beecardia;

import org.openmrs.module.beecardia.client.api.StudyPojo;

public class StudyExtractor {
    public static BeeStudy extract(StudyPojo studyPojo, BeePatient patient) {
        BeeStudy study = new BeeStudy();
        study.setStudyHashId(studyPojo.getStudyHashId());
        study.setBeePatient(patient);
        study.setExternalStorage(studyPojo.getExternalLink());

        return study;
    }
}
