package com.beecardia.client;

/**
 * User: xmitya
 * Date: 26.11.13
 * Time: 9:39
 */
public class BeeClientException extends Exception {
    private static final long serialVersionUID = 353514777630628529L;

    private int errorCode;

    public BeeClientException(String detailMessage, int errorCode) {
        super(detailMessage);
        this.errorCode = errorCode;
    }

    public BeeClientException(String detailMessage, int errorCode, Throwable throwable) {
        super(detailMessage, throwable);
        this.errorCode = errorCode;
    }

    public int getErrorCode() {
        return errorCode;
    }
}
