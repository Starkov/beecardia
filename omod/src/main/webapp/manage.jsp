<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<p>Hello ${user.systemId}!</p></br>
Doctor: ${doctor.login}
Patients:
<table>

    <c:forEach items="${doctor.beePatientList}" var="patient">
        <tr>
            <td>${patient.firstName}</td>
            <td>${patient.lastName}</td>
        </tr>
    </c:forEach>
</table>
<%@ include file="/WEB-INF/template/footer.jsp" %>