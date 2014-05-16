<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>


<table>
    <th>Patient name</th>
    <th>Patient first name</th>
    <th>Patient middle name</th>
    <th>Patient last name</th>
    <th>Birth year</th>
    <th>Binding</th>
    <c:forEach items="${patients}" var="patient">
        <form method="get" action="${patientId}/bind.form">
            <tr>
                <input type="hidden" name="beePatientId" value="${patient.id}"/>
                <td>${patient.name}</td>
                <td>${patient.firstName}</td>
                <td>${patient.middleName}</td>
                <td>${patient.lastName}</td>
                <td>${patient.birthYear}</td>
                <td><input type="radio" name="patientId" value="${patientId}"></td>
                <td><input type="submit" value="binding"></td>
            </tr>
        </form>
    </c:forEach>
</table>


<%@ include file="/WEB-INF/template/footer.jsp" %>