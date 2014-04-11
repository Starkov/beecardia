package org.openmrs.module.beecardia;

import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.DatabaseSequenceFilter;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.database.search.TablesDependencyHelper;
import org.dbunit.dataset.FilteredDataSet;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.filter.ITableFilter;
import org.dbunit.dataset.xml.FlatXmlDataSet;

import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseExport {
    public static void main(String[] args) throws Exception {
        // database connection
        Class driverClass = Class.forName("com.mysql.jdbc.Driver");
        Connection jdbcConnection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test", "root", "root");
        IDatabaseConnection connection = new DatabaseConnection(jdbcConnection);

        String[] doctorTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_doctors");
        ITableFilter filter = new DatabaseSequenceFilter(connection);
        IDataSet doctorDataset = new FilteredDataSet(filter, connection.createDataSet(doctorTable));
        FlatXmlDataSet.write(doctorDataset, new FileOutputStream("api/src/test/resources/bc_doctors-dataset.xml"));

//        String[] patientTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_patients");
//        IDataSet patientDataset = connection.createDataSet(patientTable);
//        FlatXmlDataSet.write(patientDataset, new FileOutputStream("api/src/test/resources/bc_patients-dataset.xml"));
//
//
//        String[] doctorPatientTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_doctor_patient");
//        IDataSet doctorPatientDataset = connection.createDataSet(doctorPatientTable);
//        FlatXmlDataSet.write(doctorPatientDataset, new FileOutputStream("api/src/test/resources/bc_doctor_patient-dataset.xml"));
//
//        String[] studyTable= TablesDependencyHelper.getAllDependentTables(connection, "bc_studies");
//        IDataSet studyDataset = connection.createDataSet(studyTable);
//        FlatXmlDataSet.write(studyDataset, new FileOutputStream("api/src/test/resources/bc_studies-dataset.xml"));

    }
}