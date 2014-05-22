<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>


<c:forEach items="${patients}" var="patient">
    <div class="boxHeader">
        <td>${patient.name}</td>
    </div>
    <c:forEach items="${patient.beeStudyList}" var="study">
        <div class="box">
            <table>
                <th>Date</th>
                <th>Study number</th>
                <tr>
                    <td><a href="study/${study.id}.form">${study.studyDate}</a></td>
                    <td>Study: ${study.id} </td>
                </tr>
            </table>
        </div>
    </c:forEach>
</c:forEach>

<%@ include file="/WEB-INF/template/footer.jsp" %>