<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<p>Hello ${user.systemId}!</p></br>
Doctor: ${doctor.login}
Patients:
<table>

    <c:forEach items="${doctor.beePatientList}" var="patient">
        <tr>
            <td>${patient.firstName}</td>
            <td>${patient.lastName}</td>
        </tr>
    </c:forEach>
</table>

<%-- (OPTIONAL) This should be the target DWR service that processes the http requests for results in case you fetch them via DWR --%>
<openmrs:htmlInclude file="/dwr/interface/DWREncounterService.js"/>

<%-- (OPTIONAL) Include this to apply css to improve the look and feel of the widget if the containing page doesn't include it --%>
<openmrs:htmlInclude file="/scripts/jquery/dataTables/css/dataTables_jui.css"/>

<%-- This is required if the containing page doesn't include it --%>
<openmrs:htmlInclude file="/scripts/jquery/dataTables/js/jquery.dataTables.min.js"/>

<%-- REQUIRED --%>
<openmrs:htmlInclude file="/scripts/jquery-ui/js/openmrsSearch.js"/>

<script type="text/javascript">
    var lastSearch;
    $j(document).ready(function () {
        new OpenmrsSearch("findEncounter", true, doEncounterSearch, doSelectionHandler,
                [
                    {fieldName: "personName", header: "Patient Name"},
                    {fieldName: "encounterType", header: "Encounter Type"},
                    {fieldName: "formName", header: "Encounter Form"},
                    {fieldName: "providerName", header: "Encounter Provider"},
                    {fieldName: "location", header: "Encounter Location"},
                    {fieldName: "encounterDateString", header: "Encounter Date"}
                ],
                {
                    searchLabel: '<spring:message code="Encounter.search" javaScriptEscape="true"/>',
                    searchPlaceholder: '<spring:message code="Encounter.search.placeholder" javaScriptEscape="true"/>'
                });
    });

    //The action to take when the user selects an item from the hits in the widget
    function doSelectionHandler(index, data) {
        document.location = "encounter.form?encounterId=" + data.encounterId + "&phrase=" + lastSearch;
    }

    //Contains the logic that fetches the results from the server,, should return a map of the form <String, Object>
    function doEncounterSearch(text, resultHandler, getMatchCount, opts) {
        lastSearch = text;
        DWREncounterService.findCountAndEncounters(text, opts.includeVoided, opts.start, opts.length, getMatchCount, resultHandler);
    }
</script>

<input type="text" name="PersonName"></<input />
<%@ include file="/WEB-INF/template/footer.jsp" %>