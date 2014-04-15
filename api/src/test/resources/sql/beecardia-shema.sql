CREATE TABLE `bc_doctors` (
  `id_doctor` INT(11)     NOT NULL AUTO_INCREMENT,
  `login`     VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_doctor`),
  UNIQUE KEY `id_doctor` (`id_doctor`)
)
  ENGINE =InnoDB
  AUTO_INCREMENT =3
  DEFAULT CHARSET =utf8;
CREATE TABLE `bc_patients` (
  `id_patient`          INT(11)      NOT NULL,
  `patient_hash_id`     VARCHAR(255) NOT NULL,
  `patient_name`        VARCHAR(255) NOT NULL,
  `patient_first_name`  VARCHAR(255) NOT NULL,
  `patient_middle_name` VARCHAR(255) DEFAULT NULL,
  `patient_last_name`   VARCHAR(255) NOT NULL,
  `patient_birth_year`  INT(11) DEFAULT NULL,
  PRIMARY KEY (`id_patient`),
  UNIQUE KEY `bc_hash_id_index` (`patient_hash_id`)
)
  ENGINE =InnoDB
  DEFAULT CHARSET =utf8;
CREATE TABLE `bc_doctor_patient` (
  `id_doctor`  INT(11) NOT NULL,
  `id_patient` INT(11) NOT NULL,
  PRIMARY KEY (`id_doctor`, `id_patient`),
  KEY `FK_bc_patients` (`id_patient`),
  CONSTRAINT `FK_bc_patients` FOREIGN KEY (`id_patient`) REFERENCES `bc_patients` (`id_patient`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_bc_doctor` FOREIGN KEY (`id_doctor`) REFERENCES `bc_doctors` (`id_doctor`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
  ENGINE =InnoDB
  DEFAULT CHARSET =utf8;
CREATE TABLE `bc_studies` (
  `id_study`         INT(11)      NOT NULL AUTO_INCREMENT,
  `study_hash_id`    VARCHAR(255) NOT NULL,
  `patient_hash_id`  VARCHAR(255) NOT NULL,
  `external_storage` VARCHAR(45)  NOT NULL,
  PRIMARY KEY (`id_study`),
  UNIQUE KEY `id_study_UNIQUE` (`id_study`),
  KEY `FK_patients_idx` (`patient_hash_id`),
  CONSTRAINT `FK_patients` FOREIGN KEY (`patient_hash_id`) REFERENCES `bc_patients` (`patient_hash_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
  ENGINE =InnoDB
  AUTO_INCREMENT =12
  DEFAULT CHARSET =utf8;




