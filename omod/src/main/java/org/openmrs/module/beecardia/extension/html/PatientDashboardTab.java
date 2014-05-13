package org.openmrs.module.beecardia.extension.html;

import org.openmrs.module.Extension;
import org.openmrs.module.web.extension.PatientDashboardTabExt;

public class PatientDashboardTab extends PatientDashboardTabExt {

    public Extension.MEDIA_TYPE getMediaType() {
        return Extension.MEDIA_TYPE.html;
    }

    @Override
    public String getPortletUrl() {
        return "studies";
    }

    @Override
    public String getRequiredPrivilege() {
        return "Patient Dashboard - View Example Section";
    }

    @Override
    public String getTabId() {
        return "Beecardia ECG";
    }

    @Override
    public String getTabName() {
        return "Beecardia ECG";
    }

}
