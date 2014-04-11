package com.beecardia.client.rest;

//import com.beecardia.client.ClientLogger;

import com.beecardia.client.api.BeeCredentials;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.BasicHttpEntity;
import org.apache.http.message.BasicHeader;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

/**
 * User: xmitya
 * Date: 06.11.13
 * Time: 11:25
 */
public class RestProcessor {

    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyyMMdd'T'HHmmss'Z'");
    public static final String HMAC_ALGO = "HmacSHA256";
    public static final String SHORT_HOST = "dev.beecardia.com";
    public static final String HOST = "https://" + SHORT_HOST;
    private static final String ALGORITHM = "HMAC-SHA256";
    private static final String DIGEST_DATE_PREFIX = "Beecardia";
    private static final String ZONE = "us";
    private static final String SERVICE = "rest_api";
    private static final String TERMINATING_STRING = "beecardia_request";


    public String request(BeeCredentials credentials, Method method, String message)
            throws Exception {
        if (message == null) {
            message = "{}";
        }
        String timestamp = createTimeStamp();
        String authorization = "";
        if (method != Method.GET_API_KEYS) {
            authorization = createAuthorization(credentials, method, message, timestamp);
        }
        return doRequest(method, message, authorization, timestamp);
    }

    private String doRequest(Method method, String message,
                             String authorization, String timestamp)
            throws Exception {
        //ClientLogger.d("Request: " + message);
        HttpClient client = HttpUtils.getCertificateClient();
        HttpPost post;
        String url = HOST + "/" + SERVICE + "/" + method.getMethod();
        switch (method) {
            case UPDATE_USER:
            case UPDATE_STUDY:
                post = new HttpPost(url) {
                    public static final java.lang.String METHOD_NAME = "UPDATE";

                    @Override
                    public String getMethod() {
                        return METHOD_NAME;
                    }
                };
                break;
            default:
                post = new HttpPost(url);
                break;
        }
        BasicHttpEntity data = new BasicHttpEntity();
        data.setContent(new ByteArrayInputStream(message.getBytes("UTF-8")));
//        data.setContentType("application/json");
        data.setContentType("application/json; charset=UTF-8");
        data.setChunked(false);
        data.setContentLength(message.getBytes("UTF-8").length);
        data.setContentEncoding("UTF-8");
        post.setEntity(data);
        post.addHeader(new BasicHeader("x-authorization", authorization));
        post.addHeader(new BasicHeader("x-date", timestamp));

        HttpResponse response = client.execute(post);
        HttpEntity entity = response.getEntity();
        ByteArrayOutputStream bout = new ByteArrayOutputStream();
        InputStream in = entity.getContent();
        try {
            int len;
            byte[] buf = new byte[512];
            while ((len = in.read(buf)) > 0) {
                bout.write(buf, 0, len);
            }
        } finally {
            if (in != null) {
                in.close();
            }
        }
        String responseMessage = new String(bout.toByteArray());
        //ClientLogger.d("Response: " + responseMessage);
        return responseMessage;
    }

    private String createAuthorization(BeeCredentials credentials, Method method,
                                       String message, String timestamp) throws Exception {
        String authorization = "";
        if (method != Method.GET_API_KEYS) {

            byte[] signatureKey = createSignatureKey(credentials.getSecretKey(), timestamp);
            authorization = ALGORITHM + " Credential=" + credentials.getApplicationKey()
                    + "/" + credentials.getAccessKey() + "/" + timestamp.substring(0, 8) + "/" + ZONE + "/"
                    + SERVICE + "/" + TERMINATING_STRING + ", ";
            authorization += "SignedHeaders=content-length;date;host, "
                    + "Signature=" + HashUtils.getHexLowerCase(hmac256(createStringToSign(
                    timestamp, method, message), signatureKey));
        }
        return authorization;
    }

    private byte[] createSignatureKey(String secretKey, String timestamp)
            throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException {
        byte[] key = hmac256(timestamp, (DIGEST_DATE_PREFIX + secretKey).getBytes());
        key = hmac256(ZONE, key);
        key = hmac256(SERVICE, key);
        key = hmac256(TERMINATING_STRING, key);
        return key;
    }

    private String createStringToSign(String timestamp, Method method,
                                      String message) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return ALGORITHM + '\n' + timestamp + '\n' + timestamp.substring(0, 8)
                + '/' + ZONE + '/' + SERVICE + '/' + TERMINATING_STRING + '\n'
                + HashUtils.getStringSha256(
                createCanonicalRequest(timestamp, method, message));

    }

    private String createCanonicalRequest(String timestamp, Method method, String message)
            throws NoSuchAlgorithmException, UnsupportedEncodingException {
        return method.getHttpMethod() + "\n" + "/rest_api/" + method.getMethod() + "\n\n"
                + "content-length:" + message.getBytes("UTF-8").length + '\n'
                + "date:" + timestamp + '\n' + "host:" + SHORT_HOST
                + "\n\n" + "content-length;date;host\n"
                + HashUtils.getStringSha256(message);

    }

    private byte[] hmac256(String message, byte[] key)
            throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException {
        return Hmac.hmacDigest(message, key, HMAC_ALGO);
    }

    private String createTimeStamp() {
        Date date = new Date();
        TimeZone tz = TimeZone.getDefault();
        int offset = tz.getOffset(date.getTime());
        Date gmt = new Date(date.getTime() - offset);
        return DATE_FORMAT.format(gmt);
    }
}
