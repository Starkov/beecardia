package com.beecardia.client.crypto;

import com.beecardia.client.api.UserPojo;
import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonToken;

import java.io.IOException;
import java.io.StringWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 03.02.14 17:33
 */
public class BeeCipher {

    private final JsonFactory jsonFactory;
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    // todo think to add in common place, e.g. BeeError
    public static final int GENERAL_ERROR_CODE = 500;

    public BeeCipher() {
        jsonFactory = new JsonFactory();
    }

    public UserPojo encryptUser(final UserPojo user, final EncryptionType encryptionType) throws IOException, CryptoException {
        final String plainData = buildPrivateData(user);
        final String encryptedData = encryptData(plainData, encryptionType);
        user.setEncryptionType(encryptionType.getEncryptionType());
        user.setEncryptedData(encryptedData);
        return user;
    }

    public UserPojo decryptUser(final UserPojo user) throws CryptoException, IOException {
        final EncryptionType encType = findEncryptionType(user.getEncryptionType());
        final String decryptedData = decryptData(user.getEncryptedData(), encType);
        parsePrivateData(decryptedData, user);
        return user;
    }

    private EncryptionType findEncryptionType(final String strType) {
        EncryptionType result = EncryptionType.UNSUPPORTED;
        for (final EncryptionType type : EncryptionType.values()) {
            if (type.getEncryptionType().equals(strType)) {
                result = type;
                break;
            }
        }
        return result;
    }

    private String decryptData(final String encryptedData, final EncryptionType type) throws CryptoException {
        final String decryptedData;
        switch (type) {
            case NONE:
                decryptedData = encryptedData;
                break;
            case UNSUPPORTED:
            default:
                // not used throwException() for compiler calmness
                throw new CryptoException("Unsupported encryption type", GENERAL_ERROR_CODE);
        }
        return decryptedData;
    }

    private String encryptData(final String plainData, final EncryptionType type) throws CryptoException {
        final String encryptedData;
        switch (type) {
            case NONE:
                encryptedData = plainData;
                break;
            case UNSUPPORTED:
            default:
                // not used throwException() for compiler calmness
                throw new CryptoException("Unsupported encryption type", GENERAL_ERROR_CODE);
        }
        return encryptedData;
    }

    private UserPojo parsePrivateData(final String decryptedData, final UserPojo user) throws IOException {
        /*
         *  {"encryption_type": "none", "data": "{\"name\": \"Charlie\"}"}
         */
        final JsonParser jp = jsonFactory.createJsonParser(decryptedData);
        while (!jp.isClosed()) {
            final JsonToken token = jp.nextToken();
            if (token == JsonToken.FIELD_NAME) {
                final String fieldName = jp.getText();
                jp.nextToken();
                if ("name".equals(fieldName)) {
                    user.setName(jp.getText());
                } else if ("birthdate".equals(fieldName)) {
                    user.setBirthDate(parseDate(jp.getText()));
                }
            }
        }
        return user;
    }

    private Date parseDate(final String date) {
        Date result = null;
        try {
            result = dateFormat.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return result;
    }

    private String buildPrivateData(final UserPojo user) throws IOException {
        final StringWriter sw = new StringWriter();
        final JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        jg.writeStartObject();
        jg.writeStringField("name", user.getName());
        if (user.getBirthDate() != null) {
            jg.writeStringField("birthdate", dateFormat.format(user.getBirthDate()));
        }
        jg.writeEndObject();
        jg.close();
        return sw.toString();
    }

    private void throwException(String message) throws CryptoException {
        throw new CryptoException(message, GENERAL_ERROR_CODE);
    }

    private void throwException(String message, Throwable t) throws CryptoException {
        throw new CryptoException(message, GENERAL_ERROR_CODE, t);
    }
}
