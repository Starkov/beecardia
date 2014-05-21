<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<div id="menu">
    <a href="${openmrsPatient.id}/study/patientDashboard.form">Patient dashboard</a>
</div>
</br>
<div class="boxHeader">
    ${openmrsPatient.givenName} ${openmrsPatient.middleName} ${openmrsPatient.familyName} ${openmrsPatient.gender} <span
        id="patientHeaderPatientIdentifierType">OpenMRS ID:</span> ${openmrsPatient.patientIdentifier}
</div>
</br>

<div class="boxHeader">Patients from beecardia</div>
<div class="box">
    <table>
        <th>Patient name</th>
        <th>Patient first name</th>
        <th>Patient middle name</th>
        <th>Patient last name</th>
        <th>Birth year</th>
        <th>Binding</th>
        <c:forEach items="${beePatients}" var="patient">
            <tr>
                <form method="get" action="${openmrsPatient.id}/bind.form">
                    <input type="hidden" name="patientId" value="${openmrsPatient.id}"/>
                    <input type="hidden" name="beePatientId" value="${patient.id}"/>
                    <td>${patient.name}</td>
                    <td>${patient.firstName}</td>
                    <td>${patient.middleName}</td>
                    <td>${patient.lastName}</td>
                    <td>${patient.birthYear}</td>
                    <td><input type="submit" value="bind/Associate"></td>
                </form>
            </tr>
        </c:forEach>
    </table>
</div>
</br>

<div class="boxHeader">Associated patients</div>
<div class="box">
    <table>
        <th>OpenMRS patient identifier</th>
        <th>OpenMRS patient first name</th>
        <th>OpenMRS patient middle name</th>
        <th>OpenMRS patient family name</th>

        <th>Patient name</th>
        <th>Patient first name</th>
        <th>Patient middle name</th>
        <th>Patient last name</th>
        <th>Birth year</th>

        <c:forEach items="${map}" var="entry">
            <tr>
                <td>${entry.key.patientIdentifier}</td>
                <c:forEach items="${entry.key.names}" var="personName">
                    <td>${personName.givenName}</td>
                    <td>${personName.middleName}</td>
                    <td>${personName.familyName}</td>
                </c:forEach>
                <td>${entry.value.name}</td>
                <td>${entry.value.firstName}</td>
                <td>${entry.value.middleName}</td>
                <td>${entry.value.lastName}</td>
                <td>${entry.value.birthYear}</td>
            </tr>
        </c:forEach>
    </table>
</div>
</br>


<%@ include file="/WEB-INF/template/footer.jsp" %>