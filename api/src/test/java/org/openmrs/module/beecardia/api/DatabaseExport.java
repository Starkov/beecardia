package org.openmrs.module.beecardia.api;

import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.database.QueryDataSet;
import org.dbunit.database.search.TablesDependencyHelper;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSet;

import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseExport {
    public static void main(String[] args) throws Exception {
        // database connection
        Class driverClass = Class.forName("com.mysql.jdbc.Driver");
        Connection jdbcConnection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/openmrs", "root", "root");
        IDatabaseConnection connection = new DatabaseConnection(jdbcConnection);

//        // partial database export
//        QueryDataSet partialDataSet = new QueryDataSet(connection);
//        partialDataSet.addTable("FOO", "SELECT * FROM TABLE WHERE COL='VALUE'");
//        partialDataSet.addTable("BAR");
//        FlatXmlDataSet.write(partialDataSet, new FileOutputStream("partial.xml"));
//
//        // full database export
//        IDataSet fullDataSet = connection.createDataSet();
//        FlatXmlDataSet.write(fullDataSet, new FileOutputStream("full.xml"));

        // dependent tables database export: export table X and all tables that
        // have a PK which is a FK on X, in the right order for insertion
        String[] doctorTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_doctors");
        IDataSet doctorDataset = connection.createDataSet(doctorTable);
        FlatXmlDataSet.write(doctorDataset, new FileOutputStream("api/src/test/resources/bc_doctors-dataset.xml"));

        String[] patientTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_patients");
        IDataSet patientDataset = connection.createDataSet(patientTable);
        FlatXmlDataSet.write(patientDataset, new FileOutputStream("api/src/test/resources/bc_patients-dataset.xml"));

        String[] doctorPatientTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_doctor_patient");
        IDataSet doctorPatientDataset = connection.createDataSet(doctorPatientTable);
        FlatXmlDataSet.write(doctorPatientDataset, new FileOutputStream("api/src/test/resources/bc_doctor_patient-dataset.xml"));

        String[] studyTable= TablesDependencyHelper.getAllDependentTables(connection, "bc_studies");
        IDataSet studyDataset = connection.createDataSet(studyTable);
        FlatXmlDataSet.write(studyDataset, new FileOutputStream("api/src/test/resources/bc_studies-dataset.xml"));

    }
}