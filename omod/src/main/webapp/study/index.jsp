<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<div id="patientHeader" class="boxHeader">
    <div id="patientHeaderPatientName">
        ${patient.givenName} ${patient.middleName} ${patient.familyName} ${patient.gender}
    </div>
    <div id="patientHeaderPreferredIdentifier">
        <span class="patientHeaderPatientIdentifier">
            <span id="patientHeaderPatientIdentifierType">OpenMRS ID:</span>
            ${patient.patientIdentifier}
        </span>
    </div>
</div>

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