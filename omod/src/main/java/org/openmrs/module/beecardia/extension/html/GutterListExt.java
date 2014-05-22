package org.openmrs.module.beecardia.extension.html;

import org.openmrs.module.web.extension.LinkExt;

public class GutterListExt extends LinkExt {

    String urlg = "";
    String label = "";

    public String getLabel() {
        label = "Beecardia ECG";
        return this.label;
    }

    public String getUrl() {
        urlg = "module/beecardia/sync.form";
        return this.urlg;
    }

    /**
     * Returns the required privilege in order to see this section. Can be a
     * comma delimited list of privileges. If the default empty string is
     * returned, only an authenticated user is required
     *
     * @return Privilege string
     */
    public String getRequiredPrivilege() {
        return "";
    }

}
