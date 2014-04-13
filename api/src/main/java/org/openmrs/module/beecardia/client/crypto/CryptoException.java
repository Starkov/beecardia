package org.openmrs.module.beecardia.client.crypto;

import org.openmrs.module.beecardia.client.BeeClientException;

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
