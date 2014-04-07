package org.openmrs.module.beecardia.api;

import junit.framework.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.StudyService;
import org.openmrs.module.beecardia.api.impl.StudyServiceImpl;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import static org.junit.Assert.assertNotNull;

public class StudyServiceImplTest extends BaseModuleContextSensitiveTest{


    @Test
    public void studyServiceNotNull(){
        //studyService = (StudyService) Context.getService(StudyServiceImpl.class);
        assertNotNull("Study service should not be NULL", Context.getService(StudyServiceImpl.class));
    }


}
