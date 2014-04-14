package org.openmrs.module.beecardia.client.api;

import org.openmrs.module.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 16:34
 */
public class ListPatientStudiesRequest implements SortedRequest {

    private String patientHashId;
    private String sortBy;
    private SortOrder sortOrder = SortOrder.ASC;
    private int page;
    private int limit;
    private BeeCredentials beeCredentials;

    @Override
    public SortOrder getSortOrder() {
        return sortOrder;
    }

    @Override
    public void setSortOrder(SortOrder sortOrder) {
        this.sortOrder = sortOrder;
    }

    @Override
    public String getSortBy() {
        return sortBy;
    }

    @Override
    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    @Override
    public int getPage() {
        return page;
    }

    @Override
    public void setPage(int page) {
        this.page = page;
    }

    @Override
    public int getLimit() {
        return limit;
    }

    @Override
    public void setLimit(int limit) {
        this.limit = limit;
    }

    @Override
    public void setBeeCredentials(BeeCredentials beeCredentials) {
        this.beeCredentials = beeCredentials;
    }

    @Override
    public BeeCredentials getBeeCredentials() {
        return beeCredentials;
    }

    @Override
    public Method getMethod() {
        return Method.LIST_PATIENT_STUDIES;
    }

    public String getPatientHashId() {
        return patientHashId;
    }

    public void setPatientHashId(String patientHashId) {
        this.patientHashId = patientHashId;
    }
}
