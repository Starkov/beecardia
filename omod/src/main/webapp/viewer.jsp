<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>
<div id="menu">
    <a href="patientDashboard.form">Patient dashboard</a>
</div>
</br>
<div id="patientHeader" class="boxHeader">
    <div id="patientHeaderPatientName">
        ${patient.givenName} ${patient.middleName} ${patient.familyName} ${patient.gender}
    </div>
    <div id="patientHeaderPreferredIdentifier">
        <span class="patientHeaderPatientIdentifier">
            <span id="patientHeaderPatientIdentifierType">OpenMRS ID:</span>
            ${patient.patientIdentifier}
        </span>
    </div>
</div>

<div class="boxHeader">Study ${study.studyDate}</div>
<div class="box">
    <iframe src="http://www.beecardia.com/viewer?&record_type=2&record_url=${study.externalStorage}#zoomX=25&zoomY=10&baselineCorrection=true&smooth=true&timePosition=16375"
            width="100%" height="500" frameborder="0">

    </iframe>
</div>
<%@ include file="/WEB-INF/template/footer.jsp" %>