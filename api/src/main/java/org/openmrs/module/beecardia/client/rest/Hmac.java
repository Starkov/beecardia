package org.openmrs.module.beecardia.client.rest;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * User: xmitya
 * Date: 06.11.13
 * Time: 14:34
 */
public class Hmac {

    public static byte[] hmacDigest(String message, byte[] key, String algo)
            throws NoSuchAlgorithmException, InvalidKeyException, UnsupportedEncodingException {
        SecretKeySpec keySpec = new SecretKeySpec(key, algo);
        Mac mac = Mac.getInstance(algo);
        mac.init(keySpec);
        return mac.doFinal(message.getBytes("UTF-8"));
    }
}
