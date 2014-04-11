package com.beecardia.client.api;

import java.util.ArrayList;
import java.util.List;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 14:25
 */
public class ListStudiesResponse implements SortedResponse<StudyPojo> {

    private List<StudyPojo> items = new ArrayList<StudyPojo>();
    private int pageNumber;
    private int itemsPerPage;
    private int totalPages;
    private int totalItems;

    @Override
    public List<StudyPojo> getItems() {
        return items;
    }

    @Override
    public void setItems(List<StudyPojo> items) {
        this.items = items;
    }

    @Override
    public int getPageNumber() {
        return pageNumber;
    }

    @Override
    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    @Override
    public int getItemsPerPage() {
        return itemsPerPage;
    }

    @Override
    public void setItemsPerPage(int itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
    }

    @Override
    public int getTotalPages() {
        return totalPages;
    }

    @Override
    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    @Override
    public int getTotalItems() {
        return totalItems;
    }

    @Override
    public void setTotalItems(int totalItems) {
        this.totalItems = totalItems;
    }
}
