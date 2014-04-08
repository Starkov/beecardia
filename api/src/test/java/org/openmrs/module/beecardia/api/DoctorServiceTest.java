/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
package org.openmrs.module.beecardia.api;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.openmrs.User;
import org.openmrs.api.UserService;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.Doctor;
import org.openmrs.module.beecardia.api.db.DoctorDAO;
import org.openmrs.module.beecardia.api.db.hibernate.DoctorDAOImpl;
import org.openmrs.module.beecardia.api.impl.DoctorServiceImpl;
import org.openmrs.test.BaseModuleContextSensitiveTest;

import java.util.Arrays;
import java.util.List;


public class DoctorServiceTest extends BaseModuleContextSensitiveTest {

    private DoctorService service;
    private DoctorDAO dao;


    @Before
    public void setUp() {
        dao = mock(DoctorDAOImpl.class);
        service = new DoctorServiceImpl();
        DoctorServiceImpl serviceImpl = (DoctorServiceImpl) service;
        serviceImpl.setDao(dao);
    }

    @Test
    public void shouldSetupContext() {
        assertNotNull(Context.getService(DoctorService.class));
    }

    @Test
    public void shuldSetDoctor(){
        Doctor doctor = new Doctor();
        doctor.setId(1);
        doctor.setLogin("my login");
        service.set(doctor);
        verify(dao).set(doctor);

    }

    @Test
    public void shouldGetDoctor(){
        Doctor doctor = new Doctor();
        doctor.setId(1);
        doctor.setLogin("login");
        when(dao.get(1)).thenReturn(doctor);
        Doctor targetDoctor = service.get(1);
        assertNotNull(targetDoctor);
    }
}
