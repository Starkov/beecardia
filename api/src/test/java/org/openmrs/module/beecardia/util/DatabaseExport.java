package org.openmrs.module.beecardia.util;

import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.database.search.TablesDependencyHelper;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSet;

import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseExport {
    public static void main(String[] args) throws Exception {
        // database connection
        Class.forName("com.mysql.jdbc.Driver");
        Connection jdbcConnection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/openmrs", "root", "root");
        IDatabaseConnection connection = new DatabaseConnection(jdbcConnection);

        String[] doctorTable = TablesDependencyHelper.getAllDependentTables(connection, "bc_doctors");
        IDataSet docotrDataset = connection.createDataSet(doctorTable);
        FlatXmlDataSet.write(docotrDataset, new FileOutputStream("api/src/test/resources/dataset/beecardia-dataset.xml"));

    }
}