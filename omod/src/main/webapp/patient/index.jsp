<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<div id="menu">
    <a href="${openmrsPatient.id}/study/patientDashboard.form">Patient dashboard</a>
</div>
</br>
<div id="patientHeader" class="boxHeader">
    <div id="patientHeaderPatientName">
        ${openmrsPatient.givenName} ${openmrsPatient.middleName} ${openmrsPatient.familyName} ${openmrsPatient.gender}
    </div>
    <div id="patientHeaderPreferredIdentifier">
        <span class="patientHeaderPatientIdentifier">
            <span id="patientHeaderPatientIdentifierType">OpenMRS ID:</span>
            ${openmrsPatient.patientIdentifier}
        </span>
    </div>
</div>
<div class="boxHeader">Patients from beecardia</div>
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
        <th>Binding</th>
        <c:forEach items="${map}" var="entry">
            <tr>
                <form method="get" action="${openmrsPatient.id}/bind.form">
                    <input type="hidden" name="patientId" value="${openmrsPatient.id}"/>
                    <td>${entry.key.patientIdentifier}</td>
                    <c:forEach items="${entry.key.names}" var="personName">
                        <td>${personName.givenName}</td>
                        <td>${personName.middleName}</td>
                        <td>${personName.familyName}</td>
                    </c:forEach>
                    <input type="hidden" name="beePatientId" value="${entry.value.id}"/>
                    <td>${entry.value.name}</td>
                    <td>${entry.value.firstName}</td>
                    <td>${entry.value.middleName}</td>
                    <td>${entry.value.lastName}</td>
                    <td>${entry.value.birthYear}</td>
                    <td><input type="submit" value="bind"></td>
                </form>
            </tr>
        </c:forEach>
    </table>
</div>

<%@ include file="/WEB-INF/template/footer.jsp" %>