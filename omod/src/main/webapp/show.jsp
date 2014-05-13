<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>
<%--<script type="text/javascript" src="module/beecardia/js/hltable.js"></script>--%>

<openmrs:htmlInclude file="/moduleResources/beecardia/js/hltable.js"/>

<style type="text/css">
    #MYTABLE {
        border: 1px solid black;
        border-collapse: collapse;
    }

    table th {
        background-color: gold;
    }

    .myTable.td {
    }

        /* Определяем стили для подсвечивания строк */
    .hoverRow {
        background-color: yellow;
    }

    .clickedRow {
        background-color: orange;
    }
</style>

<table id="myTable">
    <th>Patient Name</th>
    <th>Date</th>
    <th>Study number</th>
    <c:forEach items="${patients}" var="patient">
        <c:forEach items="${patient.beeStudyList}" var="study">

            <tr>
                <td><a href="study/${study.id}.form">${patient.name}</a></td>
                <td>${study.studyDate}</td>
                <td>Study: ${study.id} </td>
            </tr>
        </c:forEach>
    </c:forEach>
</table>

<script type="text/javascript">
    //Подсветка по клику и при наведении мышки на ряд, множественный выбор по клику разрешен
    highlightTableRows("myTable", "hoverRow", "clickedRow");

</script>

<%@ include file="/WEB-INF/template/footer.jsp" %>