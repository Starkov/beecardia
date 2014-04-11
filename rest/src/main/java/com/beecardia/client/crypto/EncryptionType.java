package com.beecardia.client.crypto;

/**
 * 03.02.14 17:31
 */
public enum EncryptionType {
    NONE("none"),
    UNSUPPORTED("unsupported");

    private String encryptionType;

    private EncryptionType(String encryptionType) {
        this.encryptionType = encryptionType;
    }

    public String getEncryptionType() {
        return encryptionType;
    }
}
