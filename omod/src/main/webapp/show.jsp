<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<table>
    <th>Patient Name</th>
    <th>Study number</th>
    <c:forEach items="${patients}" var="patient">
        <c:forEach items="${patient.beeStudyList}" var="study">

            <tr>
                <td><a href="study/${study.id}.form">${patient.name}</a></td>
                <td>Study: ${study.id} </td>
            </tr>

        </c:forEach>
    </c:forEach>
</table>

<%@ include file="/WEB-INF/template/footer.jsp" %>