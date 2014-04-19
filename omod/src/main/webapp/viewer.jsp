<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<iframe src="http://www.beecardia.com/viewer?&record_type=2&record_hash=${study.externalStorage}#zoomX=25&zoomY=10&baselineCorrection=true&smooth=true&timePosition=16375"
        width="100%" height="500" frameborder="0">

</iframe>
<%@ include file="/WEB-INF/template/footer.jsp" %>