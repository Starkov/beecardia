package com.beecardia.client.api;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 13:31
 */
public interface SortedRequest extends BeeRequest {

    SortOrder getSortOrder();

    void setSortOrder(SortOrder sortOrder);

    String getSortBy();

    void setSortBy(String sortBy);

    int getPage();

    void setPage(int page);

    int getLimit();

    void setLimit(int limit);
}
