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
package org.openmrs.module.beecardia.api.db;

import org.openmrs.module.beecardia.BeePatient;

import java.util.List;

/**
 * Database methods for {@link org.openmrs.module.beecardia.api.BeePatientService}.
 */
public interface BeePatientDAO {

    void set(BeePatient beePatient);

    void update(BeePatient beePatient);

    void delete(BeePatient beePatient);

    BeePatient getById(int id);

    BeePatient getByHashId(String hashId);

    List<BeePatient> getAll();
}