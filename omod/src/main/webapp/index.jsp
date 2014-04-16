<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<p>Hello ${user.systemId}!</p></br>
<form action="show.form" method="GET">
    Login: <input type="text" name="login">
    <br/>
    Password: <input type="password" name="password"/>
    <input type="submit" value="Submit"/>
</form>
</br>

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