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


<script type="text/javascript">
    //Подсветка по клику и при наведении мышки на ряд, множественный выбор по клику разрешен
    highlightTableRows("myTable", "hoverRow", "clickedRow");

</script>

<%@ include file="/WEB-INF/template/footer.jsp" %>