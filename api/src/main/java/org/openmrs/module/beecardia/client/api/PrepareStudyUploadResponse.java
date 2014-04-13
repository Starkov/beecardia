package org.openmrs.module.beecardia.client.api;

import com.amazonaws.auth.AWSCredentials;

import java.util.Date;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 9:21
 */
public class PrepareStudyUploadResponse implements BeeResponse {

    private String hashId;
    private String serviceName;
    private String serviceParameters;
    private AWSCredentials awsCredentials;
    private Date expires;
    private String bucket;

    public String getHashId() {
        return hashId;
    }

    public void setHashId(String hashId) {
        this.hashId = hashId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServiceParameters() {
        return serviceParameters;
    }

    public void setServiceParameters(String serviceParameters) {
        this.serviceParameters = serviceParameters;
    }

    public AWSCredentials getAwsCredentials() {
        return awsCredentials;
    }

    public void setAwsCredentials(AWSCredentials awsCredentials) {
        this.awsCredentials = awsCredentials;
    }

    public Date getExpires() {
        return expires;
    }

    public void setExpires(Date expires) {
        this.expires = expires;
    }

    public String getBucket() {
        return bucket;
    }

    public void setBucket(String bucket) {
        this.bucket = bucket;
    }
}
