package com.beecardia.client.crypto;

import com.beecardia.client.BeeClientException;

/**
 * 03.02.14 18:00
 */
public class CryptoException extends BeeClientException {

    public CryptoException(String detailMessage, int errorCode) {
        super(detailMessage, errorCode);
    }

    public CryptoException(String detailMessage, int errorCode, Throwable throwable) {
        super(detailMessage, errorCode, throwable);
    }
}
