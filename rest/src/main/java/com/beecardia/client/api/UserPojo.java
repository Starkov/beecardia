package com.beecardia.client.api;

import java.util.Date;

/**
 * User: xmitya
 * Date: 14.11.13
 * Time: 12:35
 */
public class UserPojo {

    public static final String DEFAULT_FORMAT = "1.0";

    private long id;
    private String email;
    private String firstName;
    private String middleName;
    private String lastName;
    private String name;
    private int gender;
    private Date birthDate;
    private String hashId;
    private String encryptedData;
    private String encryptionType;
    private String phone;
    private String address1;
    private String address2;
    private String city;
    private String zipCode;
    private String region;
    private String country;
    private int birthYear;
    private int height;
    private int weight;
    private String animalType;
    private String animalBreed;
    private int animalCastrated;
    private Date updateTimeGMT;

    private String anamnesis;
    private String codeICD;

    private String format = DEFAULT_FORMAT;
    private String checksum;

    // metadata
    private String localHashId;

    public String getLocalHashId() {
        return localHashId;
    }

    public void setLocalHashId(String localHashId) {
        this.localHashId = localHashId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getHashId() {
        return hashId;
    }

    public void setHashId(String hashId) {
        this.hashId = hashId;
    }

    public String getEncryptedData() {
        return encryptedData;
    }

    public void setEncryptedData(String encryptedData) {
        this.encryptedData = encryptedData;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getAnimalType() {
        return animalType;
    }

    public void setAnimalType(String animalType) {
        this.animalType = animalType;
    }

    public String getAnimalBreed() {
        return animalBreed;
    }

    public void setAnimalBreed(String animalBreed) {
        this.animalBreed = animalBreed;
    }

    public int getAnimalCastrated() {
        return animalCastrated;
    }

    public void setAnimalCastrated(int animalCastrated) {
        this.animalCastrated = animalCastrated;
    }

    public Date getUpdateTimeGMT() {
        return updateTimeGMT;
    }

    public void setUpdateTimeGMT(Date updateTimeGMT) {
        this.updateTimeGMT = updateTimeGMT;
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

    public String getEncryptionType() {
        return encryptionType;
    }

    public void setEncryptionType(String encryptionType) {
        this.encryptionType = encryptionType;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getChecksum() {
        return checksum;
    }

    public void setChecksum(String checksum) {
        this.checksum = checksum;
    }
}
