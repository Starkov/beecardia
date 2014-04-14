package org.openmrs.module.beecardia.client.api;

/**
 * User: xmitya
 * Date: 13.11.13
 * Time: 15:48
 */
public class BeeServiceException extends Exception {

    private static final long serialVersionUID = 1656119631487284890L;
    private BeeError beeError = BeeError.UNKNOWN_ERROR;

    public BeeServiceException(BeeError beeError) {
        super(beeError.getDescription());
        this.beeError = beeError;
    }

    public BeeServiceException(String message) {
        super(message);
    }

    public BeeServiceException(BeeError beeError, Throwable e) {
        super(e);
        this.beeError = beeError;
    }

    public BeeServiceException(String message, Throwable e) {
        super(message, e);
    }

    public BeeError getBeeError() {
        return beeError;
    }
}
