<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>
<div id="menu">
    <a href="patientDashboard.form">Patient dashboard</a>
</div>
</br>
<div class="boxHeader">
    ${openmrsPatient.givenName} ${openmrsPatient.middleName} ${openmrsPatient.familyName} ${openmrsPatient.gender} <span
        id="patientHeaderPatientIdentifierType">OpenMRS ID:</span> ${openmrsPatient.patientIdentifier}
</div>
</br>

<div class="boxHeader">Studies</div>
<div class="box">
    <table>
        <th>Date</th>
        <th>Study number</th>
        <c:forEach items="${studies}" var="study">
            <tr>
                <td><a href="${study.id}.form"> ${study.studyDate}</a></td>
                <td>Study id: ${study.id} </td>
            </tr>
        </c:forEach>
    </table>
</div>
<%@ include file="/WEB-INF/template/footer.jsp" %>