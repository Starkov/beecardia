package com.beecardia.client.rest;

import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * User: xmitya
 * Date: 06.11.13
 * Time: 15:27
 */
public class HashUtils {

    static final String HEXES = "0123456789ABCDEF";
    static final String HEXESLC = "0123456789abcdef";
    static final String SHA1 = "SHA-1";
    static final String SHA256 = "SHA-256";
    static final String SHA512 = "SHA-512";
    static final String MD5 = "MD5";

    private HashUtils() {
    }

    public static String getHex(byte[] raw) {
        final StringBuilder hex = new StringBuilder(2 * raw.length);
        for (final byte b : raw) {
            hex.append(HEXES.charAt((b & 0xF0) >> 4))
                    .append(HEXES.charAt((b & 0x0F)));
        }
        return hex.toString();
    }

    public static byte[] hexStringToByteArray(String s) {
        int len = s.length();
        byte[] data = new byte[len / 2];
        for (int i = 0; i < len; i += 2) {
            data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
                    + Character.digit(s.charAt(i + 1), 16));
        }
        return data;
    }

    public static String getHexLowerCase(byte[] raw) {
        final StringBuilder hex = new StringBuilder(2 * raw.length);
        for (final byte b : raw) {
            hex.append(HEXESLC.charAt((b & 0xF0) >> 4))
                    .append(HEXESLC.charAt((b & 0x0F)));
        }
        return hex.toString();
    }

    public static byte[] getRawStringSha256(String string) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return getSha(string, SHA256);
    }

    public static byte[] getRawSha256(byte[] raw) throws NoSuchAlgorithmException {
        return getSha(raw, SHA256);
    }

    public static String getStringSha256(String string) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return getHexLowerCase(getSha(string, SHA256));
    }

    private static byte[] getSha(String string, String method) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return getSha(string.getBytes("UTF-8"), method);
    }

    private static byte[] getSha(byte[] bytes, String method) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance(method);
        return digest.digest(bytes);
    }

    public static String getStringSha1(String string) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return getHex(getSha(string, SHA1));
    }

    public static String getByteSha1(byte[] bytes) throws NoSuchAlgorithmException {
        return getHex(getSha(bytes, SHA1));
    }

    private static byte[] getSha512(File file) throws IOException, NoSuchAlgorithmException {
        InputStream in = null;
        byte[] buffer = new byte[1024];
        MessageDigest complete = null;
        try {
            in = new FileInputStream(file);
            complete = MessageDigest.getInstance(SHA512);
            int numRead;
            do {
                numRead = in.read(buffer);
                if (numRead > 0) {
                    complete.update(buffer, 0, numRead);
                }
            } while (numRead != -1);
        } finally {
            if (in != null) {
                in.close();
            }
        }
        return complete.digest();
    }

}
