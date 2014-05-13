package org.openmrs.module.beecardia.api.util;

import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.enity.BeeStudy;
import org.openmrs.module.beecardia.client.api.StudyPojo;

public class StudyExtractor {

    public static BeeStudy extract(StudyPojo studyPojo, BeePatient patient) {

        BeeStudy study = new BeeStudy();
        study.setStudyDate(studyPojo.getStartTime());
        study.setStudyHashId(studyPojo.getStudyHashId());
        study.setBeePatient(patient);
        study.setExternalStorage(studyPojo.getExternalLink());

        return study;
    }
}
