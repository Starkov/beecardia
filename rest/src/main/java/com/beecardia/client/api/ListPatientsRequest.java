package com.beecardia.client.api;

import com.beecardia.client.rest.Method;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 14:01
 */
public class ListPatientsRequest implements SortedRequest {

    private String sortBy;
    private SortOrder sortOrder = SortOrder.ASC;
    private int page;
    private int limit;
    private BeeCredentials beeCredentials;

    @Override
    public String getSortBy() {
        return sortBy;
    }

    @Override
    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    @Override
    public SortOrder getSortOrder() {
        return sortOrder;
    }

    @Override
    public void setSortOrder(SortOrder sortOrder) {
        this.sortOrder = sortOrder;
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
    public BeeCredentials getBeeCredentials() {
        return beeCredentials;
    }

    @Override
    public void setBeeCredentials(BeeCredentials beeCredentials) {
        this.beeCredentials = beeCredentials;
    }

    @Override
    public Method getMethod() {
        return Method.LIST_PATIENTS;
    }
}
