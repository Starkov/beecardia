<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>
<div id="menu">
    <a href="patientDashboard.form">Patient dashboard</a>
</div>
</br>
<div class="boxHeader">
    ${openmrsPatient.givenName} ${openmrsPatient.middleName} ${openmrsPatient.familyName} ${openmrsPatient.gender} <span
        id="patientHeaderPatientIdentifierType">OpenMRS ID:</span> ${openmrsPatient.patientIdentifier}
</div>
</br>

<div class="boxHeader">Study ${study.studyDate}</div>
<div class="box">
    <iframe src="http://www.beecardia.com/viewer?&record_type=2&record_url=${study.externalStorage}#zoomX=25&zoomY=10&baselineCorrection=true&smooth=true&timePosition=16375"
            width="100%" height="500" frameborder="0">

    </iframe>
</div>
<%@ include file="/WEB-INF/template/footer.jsp" %>