<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

Patients:
<table>

    <c:forEach items="${patients}" var="patient">
        <tr>
            <td>${patient.firstName}</td>
            <td>${patient.lastName}</td>
        </tr>
        <c:forEach items="${patient.beeStudyList}" var="study">
            <tr>
                <td>${study.id}</td>
                <td>${study.externalStorage}</td>
            </tr>
        </c:forEach>
    </c:forEach>
</table>

<%@ include file="/WEB-INF/template/footer.jsp" %>