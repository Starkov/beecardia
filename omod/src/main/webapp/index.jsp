<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<p>To synchronize with your account Beecardia enter your login and password for your account Beecardia</p>

<div class="boxHeader">Beecardia</div>
<div class="box">
    <form action="show.form" method="GET">
        <table>
            <tr>
                <td>Login:</td>
                <td><input type="text" name="login"></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password"/></td>
            </tr>
            <tr>
                <td colspan="3"><input type="submit" value="synchronize"/></td>
            </tr>
        </table>
    </form>
</div>
<%@ include file="/WEB-INF/template/footer.jsp" %>