<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

Patients:
<table>

    <c:forEach items="${patients}" var="patient">
        <tr>

        </tr>
        <c:forEach items="${patient.beeStudyList}" var="study">
            <tr>
                <td>${patient.name}</td>
                <td>${patient.firstName}</td>
                <td>${patient.lastName}</td>
                <td><a href="study/${study.id}.form">Study: ${study.id} </a></td>
            </tr>
        </c:forEach>
    </c:forEach>
</table>

<%@ include file="/WEB-INF/template/footer.jsp" %>