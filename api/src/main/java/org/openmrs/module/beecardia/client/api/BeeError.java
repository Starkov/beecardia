package org.openmrs.module.beecardia.client.api;

/**
 * User: xmitya
 * Date: 13.11.13
 * Time: 15:54
 */
public enum BeeError {
    MISSING_PARAMETER(0, "Missing a parameter value in payload"),
    MISSING_FIELD_IN_HEADER(1, "Missing field in header, for example x-timestamp is missing"),
    TIMESTAMP_EXPIRED(2, "Timestamp expired, for example when there is a difference of more " +
            "than 10 minutes between client and server's time stamp"),
    WRONG_SIGNATURE(3, "Wrong signature"),
    BAD_JSON(4, "Body json is not well formatted"),
    MISSING_JSON_PARAMETER(5, "Missing parameter in body json (when required, for example in" +
            " add_user, email is missing"),
    DATABASE_ERROR(6, "Database error - server could not write or read to database"),
    NON_SSL_REQUEST(8, "Non SSL request"),
    WRONG_PASSWORD(9, "Wrong password"),
    NO_SUFFICIENT_PERMISSIONS(10, "No sufficient permissions"),
    WRONG_ACCESS_KEY(11, "Wrong access key"),
    WRONG_CREDENTIALS(12, "Wrong credentials (key + secret)"),
    CREDENTIALS_ALREADY_EXIST(13, "Credentials already exist (in get_api_keys)"),
    USER_NOT_FOUND(14, "User not found"),
    STUDY_NOT_SAVED(15, "Study not saved"),
    PATIENT_NOT_FOUND(16, "Patient not found"),

    UPLOAD_SERVICE_NOT_SUPPORTED(17, "Upload service not supported"),
    WRONG_ENCRYPTED_DATA_CHECKSUM(18, "Wrong encrypted data checksum"),
    UNKNOWN_PARAMETER(19, "Unknown parameter"),
    WRONG_REQUEST_METHOD(20, "Wrong request method"),
    STUDY_NOT_FOUND(21, "Study not found"),
    GENERAL_ERROR(100, "General error"),

    UNKNOWN_ERROR(999, "Error was caused");

    private int id;
    private String description;

    private BeeError(int id, String description) {
        this.id = id;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }
}
