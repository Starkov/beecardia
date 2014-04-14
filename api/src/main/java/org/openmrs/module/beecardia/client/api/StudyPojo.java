package org.openmrs.module.beecardia.client.api;

import java.util.Date;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 14:26
 */
public class StudyPojo {

    private String studyHashId;
    private String creatorHashId;
    private String patientHashId;
    private String externalStorage;
    private Date startTime;
    private int startTimeZoneOffset;
    private int duration;
    private int samplingRate;
    private long numberOfSamples;
    private int unitsPerMv;
    private int ecgDataBlockSize;
    private int numberOfLeads;
    private String deviceClass;
    private String deviceNumber;

    private int gender;
    private int age;
    private int weight;
    private int height;
    private String anamnesis;
    private String codeICD;
    private int status;


    // metadata fields
    private String localStudyHashId;
    private String localCreatorHashId;
    private String localPatientHashId;
    private String awsS3bucketName;
    private String studyPrefix;
    private Date updateTimeGMT;

    public int getStartTimeZoneOffset() {
        return startTimeZoneOffset;
    }

    public void setStartTimeZoneOffset(int startTimeZoneOffset) {
        this.startTimeZoneOffset = startTimeZoneOffset;
    }

    public String getStudyHashId() {
        return studyHashId;
    }

    public void setStudyHashId(String studyHashId) {
        this.studyHashId = studyHashId;
    }

    public String getCreatorHashId() {
        return creatorHashId;
    }

    public void setCreatorHashId(String creatorHashId) {
        this.creatorHashId = creatorHashId;
    }

    public String getPatientHashId() {
        return patientHashId;
    }

    public void setPatientHashId(String patientHashId) {
        this.patientHashId = patientHashId;
    }

    public String getExternalLink() {
        return externalStorage;
    }

    public void setExternalStorage(String externalStorage) {
        this.externalStorage = externalStorage;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getSamplingRate() {
        return samplingRate;
    }

    public void setSamplingRate(int samplingRate) {
        this.samplingRate = samplingRate;
    }

    public long getNumberOfSamples() {
        return numberOfSamples;
    }

    public void setNumberOfSamples(long numberOfSamples) {
        this.numberOfSamples = numberOfSamples;
    }

    public int getUnitsPerMv() {
        return unitsPerMv;
    }

    public void setUnitsPerMv(int unitsPerMv) {
        this.unitsPerMv = unitsPerMv;
    }

    public int getEcgDataBlockSize() {
        return ecgDataBlockSize;
    }

    public void setEcgDataBlockSize(int ecgDataBlockSize) {
        this.ecgDataBlockSize = ecgDataBlockSize;
    }

    public int getNumberOfLeads() {
        return numberOfLeads;
    }

    public void setNumberOfLeads(int numberOfLeads) {
        this.numberOfLeads = numberOfLeads;
    }

    public String getDeviceClass() {
        return deviceClass;
    }

    public void setDeviceClass(String deviceClass) {
        this.deviceClass = deviceClass;
    }

    public String getDeviceNumber() {
        return deviceNumber;
    }

    public void setDeviceNumber(String deviceNumber) {
        this.deviceNumber = deviceNumber;
    }

    // metadata accessors

    public String getLocalStudyHashId() {
        return localStudyHashId;
    }

    public void setLocalStudyHashId(String localStudyHashId) {
        this.localStudyHashId = localStudyHashId;
    }

    public String getLocalCreatorHashId() {
        return localCreatorHashId;
    }

    public void setLocalCreatorHashId(String localCreatorHashId) {
        this.localCreatorHashId = localCreatorHashId;
    }

    public String getLocalPatientHashId() {
        return localPatientHashId;
    }

    public void setLocalPatientHashId(String localPatientHashId) {
        this.localPatientHashId = localPatientHashId;
    }

    public String getAwsS3bucketName() {
        return awsS3bucketName;
    }

    public void setAwsS3bucketName(String awsS3bucketName) {
        this.awsS3bucketName = awsS3bucketName;
    }

    public String getStudyPrefix() {
        return studyPrefix;
    }

    public void setStudyPrefix(String studyPrefix) {
        this.studyPrefix = studyPrefix;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getHeight() {
        return height;
    }

    public String getAnamnesis() {
        return anamnesis;
    }

    public void setAnamnesis(String anamnesis) {
        this.anamnesis = anamnesis;
    }

    public String getCodeICD() {
        return codeICD;
    }

    public void setCodeICD(String codeICD) {
        this.codeICD = codeICD;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getUpdateTimeGMT() {
        return updateTimeGMT;
    }

    public void setUpdateTimeGMT(Date updateTimeGMT) {
        this.updateTimeGMT = updateTimeGMT;
    }
}
