package com.beecardia.client.api;

import java.util.List;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 14:41
 */
public interface SortedResponse<T> extends BeeResponse {

    List<T> getItems();

    void setItems(List<T> items);

    int getPageNumber();

    void setPageNumber(int pageNumber);

    int getItemsPerPage();

    void setItemsPerPage(int itemsPerPage);

    int getTotalPages();

    void setTotalPages(int totalPages);

    int getTotalItems();

    void setTotalItems(int totalItems);
}
