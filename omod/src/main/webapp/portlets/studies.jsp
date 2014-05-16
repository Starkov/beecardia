<%@ include file="/WEB-INF/template/include.jsp" %>

Hello
<div class="boxHeader">Study</div>
<div class="box">
    <a href="module/beecardia/patient/<%= request.getParameter("patientId")%>/study/index.form">Show studies</a>
</div>
</br>
<div class="boxHeader">Manage</div>
<div class="box">
    <a href="module/beecardia/patient/<%= request.getParameter("patientId")%>.form">
        Binding this patient to Beecardia patient
    </a>
</div>

