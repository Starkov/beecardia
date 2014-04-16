package org.openmrs.module.beecardia.client.api;

import com.amazonaws.auth.AWSSessionCredentials;
import com.amazonaws.auth.BasicSessionCredentials;
import org.codehaus.jackson.*;
import org.codehaus.jackson.map.ObjectMapper;
import org.openmrs.module.beecardia.client.rest.HashUtils;
import org.openmrs.module.beecardia.client.rest.RestProcessor;

import java.io.IOException;
import java.io.StringWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

//import com.fasterxml.jackson.core.JsonFactory;
//import com.fasterxml.jackson.core.JsonGenerator;
//import com.fasterxml.jackson.core.JsonParser;
//import com.fasterxml.jackson.core.JsonToken;

/**
 * User: xmitya
 * Date: 13.11.13
 * Time: 15:11
 */
public class BeeServiceAPI {

    public static final String METADATA_SEPARATOR = ",";

    private final RestProcessor restProcessor;
    private final JsonFactory jsonFactory;

    public BeeServiceAPI() {
        restProcessor = new RestProcessor();
        jsonFactory = new JsonFactory();
    }

    @SuppressWarnings("unchecked")
    private <T extends BeeResponse> T doRequest(BeeRequest request, Class<? extends BeeRequest> requestType)
            throws BeeServiceException {
        T response = null;
        try {
            if (requestType == GetKeysRequest.class) {
                response = (T) doGetKeys((GetKeysRequest) request);
            } else if (requestType == GetUserRequest.class) {
                response = (T) doGetUser((GetUserRequest) request);
            } else if (requestType == PrepareStudyUploadRequest.class) {
                response = (T) doPrepareStudyUpload((PrepareStudyUploadRequest) request);
            } else if (requestType == SignupUserRequest.class) {
                response = (T) doSignupUser((SignupUserRequest) request);
            } else if (requestType == UpdateUserRequest.class) {
                response = (T) doUpdateUser((UpdateUserRequest) request);
            } else if (requestType == ListPatientsRequest.class) {
                response = (T) doListPatients((ListPatientsRequest) request);
            } else if (requestType == StudyUploadedRequest.class) {
                response = (T) doStudyUploaded((StudyUploadedRequest) request);
            } else if (requestType == UpdateStudyRequest.class) {
                response = (T) doUpdateStudy((UpdateStudyRequest) request);
            } else if (requestType == ListStudiesRequest.class) {
                response = (T) doListCreatedStudies((ListStudiesRequest) request);
            } else if (requestType == ListPatientStudiesRequest.class) {
                response = (T) doListPatientStudies((ListPatientStudiesRequest) request);
            }
        } catch (BeeServiceException e) {
            throw e;
        } catch (Exception e) {
            throw new BeeServiceException(BeeError.UNKNOWN_ERROR, e);
        }
        return response;
    }

    public GetUserResponse getUser(GetUserRequest request) throws BeeServiceException {
        return doRequest(request, GetUserRequest.class);
    }

    public GetKeysResponse getKeys(GetKeysRequest request) throws BeeServiceException {
        return doRequest(request, GetKeysRequest.class);
    }

    public PrepareStudyUploadResponse prepareStudyUpload(PrepareStudyUploadRequest request) throws BeeServiceException {
        return doRequest(request, PrepareStudyUploadRequest.class);
    }

    public SignupUserResponse signupUser(SignupUserRequest request) throws BeeServiceException {
        return doRequest(request, SignupUserRequest.class);
    }

    public UpdateUserResponse updateUser(final UpdateUserRequest request) throws BeeServiceException {
        return doRequest(request, UpdateUserRequest.class);
    }

    public ListPatientsResponse listPatients(ListPatientsRequest request) throws BeeServiceException {
        return doRequest(request, ListPatientsRequest.class);
    }

    public StudyUploadedResponse studyUploaded(StudyUploadedRequest request) throws BeeServiceException {
        return doRequest(request, StudyUploadedRequest.class);
    }

    public UpdateStudyResponse updateStudy(final UpdateStudyRequest request) throws BeeServiceException {
        return doRequest(request, UpdateStudyRequest.class);
    }

    public ListStudiesResponse listCreatedStudies(ListStudiesRequest request) throws BeeServiceException {
        return doRequest(request, ListStudiesRequest.class);
    }

    public ListPatientStudiesResponse listPatientStudies(ListPatientStudiesRequest request) throws BeeServiceException {
        return doRequest(request, ListPatientStudiesRequest.class);
    }

    private GetKeysResponse doGetKeys(GetKeysRequest request) throws Exception {
        request.setPasswordHash(request.getPassword() + request.getEmail());
        byte[] raw = HashUtils.getRawStringSha256(request.getPasswordHash());
        for (int i = 0; i < 4999; i++) {
            raw = HashUtils.getRawSha256(raw);
        }
        request.setPasswordHash(HashUtils.getHexLowerCase(raw));
        StringWriter sw = new StringWriter();
        JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        /*
        Request:
        {
          “application_key”: “WEB_1_0”,
          “email”: “demo@beecardia.com”,
          “password”: “b109f3bbb...”
        }
         */
        jg.writeStartObject();
        jg.writeStringField("application_key", BeeCredentials.APPLICATION_KEY);
        jg.writeStringField("email", request.getEmail());
        jg.writeStringField("password", request.getPasswordHash());
        jg.writeEndObject();
        jg.close();
        String responseMessage = rawRequest(request, sw.toString());
        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        /*
        Response:
        {
          “application_key”: “WEB_1_0”,
          “access_key”: “8e74d71fc7d63d206”,
          “access_secret”: “cbce02abb8bc2557”,
          “expires”: “2113-11-07T08:50:30+02:00”
        }
         */
        GetKeysResponse response = new GetKeysResponse();
        while (!jp.isClosed()) {
            JsonToken token = jp.nextToken();
            if (token == JsonToken.FIELD_NAME) {
                String fieldName = jp.getText();
                jp.nextToken();
                if ("application_key".equals(fieldName)) {
                    response.setApplicationKey(jp.getText());
                } else if ("access_key".equals(fieldName)) {
                    response.setAccessKey(jp.getText());
                } else if ("access_secret".equals(fieldName)) {
                    response.setSecretKey(jp.getText());
                } else if ("expires".equals(fieldName)) {
                    response.setExpired(DateTimeUtils.gmtStringToDate(jp.getText()));
                }
            }
        }
        return response;
    }

    private GetUserResponse doGetUser(GetUserRequest request) throws Exception {
        String responseMessage = restProcessor.request(
                request.getBeeCredentials(),
                request.getMethod(),
                "{}"
        );
        assertError(responseMessage, jsonFactory);
        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        /*
        Response example:
        {
          "id": 5,
          "email": “lydia@madrigal.com",
          "first_name": "Lydia",
          "middle_name": "Rodarte",
          "last_name": "Quayle",
          "name": "Lydia Rodarte-Quayle",
          "gender”:1,
          ”birthdate”:“1978-11-23”,
          ”hash_id": "91A55F53524B53915E5CCC3AA56740107C3BBD21",
          "encrypted_data”: ”{}”,
          ”phone”: ”+1-866-264-8181”,
          ”address1”: ”26 Helen Boucher Blvd”,
          ”address2”: ”Suite #23”,
          ”city”: ”Houston”,
          ”zipcode”: ”6645519”,
          ”region”: ”TX”,
          ”country”: ”USA”,
          ”birth_year”: 1978,
          ”height": 169,
          ”weight": 56,
          ”animal_type": null,
          "animal_breed": null,
          "animal_castrated": null
        }
         */
        GetUserResponse response = new GetUserResponse();
        try {
            while (!jp.isClosed()) {
                parseUserJson(jp, response);
                jp.nextToken();
            }
        } finally {
            jp.close();
        }
        return response;
    }

    private <T extends UserPojo> T parseUserJson(JsonParser jp, T user) throws IOException, ParseException {
        JsonToken token = jp.nextToken();
        while (token != JsonToken.END_OBJECT && !jp.isClosed()) {
            if (token == JsonToken.FIELD_NAME) {
                String fieldName = jp.getText();
                token = jp.nextToken();
                if (token != JsonToken.VALUE_NULL) {
                    if ("id".equals(fieldName)) {
                        user.setId(jp.getLongValue());
                    } else if ("email".equals(fieldName)) {
                        user.setEmail(jp.getText());
                    } else if ("first_name".equals(fieldName)) {
                        user.setFirstName(jp.getText());
                    } else if ("middle_name".equals(fieldName)) {
                        user.setMiddleName(jp.getText());
                    } else if ("last_name".equals(fieldName)) {
                        user.setLastName(jp.getText());
                    } else if ("name".equals(fieldName)) {
                        user.setName(jp.getText());
                    } else if ("gender".equals(fieldName)) {
                        user.setGender(jp.getIntValue());
                    } /*else if ("birthdate".equals(fieldName)) {
                        String date = jp.getText();
                        if (date != null && !"".equals(date)) {
                            try {
                                user.setBirthDate(DateTimeUtils.gmtStringToDate(date));
                            } catch (ParseException e) {
//                                e.printStackTrace();
                                System.err.println(e.getMessage());
                            }
                        }
                    }*/ else if ("hash_id".equals(fieldName)) {
                        user.setHashId(jp.getText());
                    } else if ("encrypted_data".equals(fieldName)) {
                        parseEncryptedData(user, jp);
//                        user.setEncryptedData(jp.getText());
                    } else if ("phone".equals(fieldName)) {
                        user.setPhone(jp.getText());
                    } else if ("address1".equals(fieldName)) {
                        user.setAddress1(jp.getText());
                    } else if ("address2".equals(fieldName)) {
                        user.setAddress2(jp.getText());
                    } else if ("city".equals(fieldName)) {
                        user.setCity(jp.getText());
                    } else if ("zipcode".equals(fieldName)) {
                        user.setZipCode(jp.getText());
                    } else if ("region".equals(fieldName)) {
                        user.setRegion(jp.getText());
                    } else if ("country".equals(fieldName)) {
                        user.setCountry(jp.getText());
                    } else if ("birth_year".equals(fieldName)) {
                        user.setBirthYear(jp.getIntValue());
                    } else if ("height".equals(fieldName)) {
                        user.setHeight(jp.getIntValue());
                    } else if ("weight".equals(fieldName)) {
                        user.setWeight(jp.getIntValue());
                    } else if ("animal_type".equals(fieldName)) {
                        user.setAnimalType(jp.getText());
                    } else if ("animal_breed".equals(fieldName)) {
                        user.setAnimalBreed(jp.getText());
                    } else if ("animal_castrated".equals(fieldName)) {
                        user.setAnimalCastrated(jp.getIntValue());
                    } else if ("anamnesis".equals(fieldName)) {
                        user.setAnamnesis(jp.getText());
                    } else if ("icd_code".equals(fieldName)) {
                        user.setCodeICD(jp.getText());
                    } else if ("external_data".equals(fieldName)) {
//                        parseUserMetadata(user, jp.getText());
                        parseUserExternalDataOrMeta(user, jp.getText());
                    } /*else if ("birthdate".equals(fieldName)) {
                        user.setBirthDate(parseBirthDate(jp.getText()));
                    }*/
                }
            }
            token = jp.nextToken();
        }
        return user;
    }

    private <T extends StudyPojo> T parseStudyJson(JsonParser jp, T study) throws IOException, ParseException {
        /*
        Example:
        {
            “hash_id”: “9F178D20AFEC6BEC7E2184A644ED4A5969CC6CD3”,
            “creator_hash_id”: “91A55F53524B53915E5CCC3AA56740107C3BBD21”,
            “patient_hash_id”: “40ED03973001DF0324AA6E8390B94879A933A680”,
            “external_storage”: “https://s3.amazonaws.com/beecardia05.witalize.com/Rec12B8D32D41CCE7925B17429A6506A6CD4102873E.2013_10_03_11_36_37.sig”,
            “start_time”: “2013-11-01T10:14:23”,
            “start_time_zone”: “US”,
            “duration”: 86400,
            “sampling_rate”: 400,
            “number_of_samples”: 34560033,
            “units_per_mv”: 200,
            “ecg_data_block_size”: 400,
            “number_of_leads”: 3,
            “device_class”: “Arnika”,
            “device_number”: “12223”,
            "metadata":{}
          }
         */
        JsonToken token = jp.nextToken();
        while (token != JsonToken.END_OBJECT && !jp.isClosed()) {
            if (token == JsonToken.FIELD_NAME) {
                String fieldName = jp.getText();
                token = jp.nextToken();
                if (token != JsonToken.VALUE_NULL) {
                    if ("hash_id".equals(fieldName)) {
                        study.setStudyHashId(jp.getText());
                    } else if ("creator_hash_id".equals(fieldName)) {
                        study.setCreatorHashId(jp.getText());
                    } else if ("patient_hash_id".equals(fieldName)) {
                        study.setPatientHashId(jp.getText());
                    } else if ("link".equals(fieldName)) {
                        study.setExternalStorage(jp.getText());
                    } else if ("start_time".equals(fieldName)) {
                        study.setStartTime(DateTimeUtils.gmtStringToDate(jp.getText()));
                    } else if ("start_time_zone".equals(fieldName)) {
                        try {
                            study.setStartTimeZoneOffset(Integer.parseInt(jp.getText()));
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    } else if ("duration".equals(fieldName)) {
                        study.setDuration(jp.getIntValue());
                    } else if ("sampling_rate".equals(fieldName)) {
                        study.setSamplingRate(jp.getIntValue());
                    } else if ("number_of_samples".equals(fieldName)) {
                        study.setNumberOfSamples(jp.getIntValue());
                    } else if ("units_per_mv".equals(fieldName)) {
                        study.setUnitsPerMv(jp.getIntValue());
                    } else if ("ecg_data_block_size".equals(fieldName)) {
                        study.setEcgDataBlockSize(jp.getIntValue());
                    } else if ("number_of_leads".equals(fieldName)) {
                        study.setNumberOfLeads(jp.getIntValue());
                    } else if ("device_class".equals(fieldName)) {
                        study.setDeviceClass(jp.getText());
                    } else if ("device_number".equals(fieldName)) {
                        study.setDeviceNumber(jp.getText());
                    } else if ("external_data".equals(fieldName)) { // my metadata
                        String metadata = jp.getText();
//                        parseStudyMetadata(study, metadata);
                        parseStudyExternalDataOrMeta(study, metadata);
                    } else if ("age".equals(fieldName)) {
                        study.setAge(jp.getIntValue());
                    } else if ("height".equals(fieldName)) {
                        study.setHeight(jp.getIntValue());
                    } else if ("weight".equals(fieldName)) {
                        study.setWeight(jp.getIntValue());
                    } else if ("gender".equals(fieldName)) {
                        study.setGender(jp.getIntValue());
                    } else if ("anamnesis".equals(fieldName)) {
                        study.setAnamnesis(jp.getText());
                    } else if ("icd_code".equals(fieldName)) {
                        study.setCodeICD(jp.getText());
                    }
                }
            }
            token = jp.nextToken();
        }
        return study;
    }

    private PrepareStudyUploadResponse doPrepareStudyUpload(PrepareStudyUploadRequest request) throws Exception {
        StringWriter sw = new StringWriter();
        JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        /*
        Request example:
        {"upload_service": "AmazonS3"}
         */
        try {
            jg.writeStartObject();
            jg.writeStringField("upload_service", request.getUploadService());
            jg.writeEndObject();
        } finally {
            jg.close();
        }
        String responseMessage = rawRequest(request, sw.toString());
        /*
        Response example:
        {
          "hash_id":"HASH_ID",
          "service_name":"AmazonS3",
          "service_parameters":{
          "credentials":{
             "session_token":"S3_SESSION_TOKEN",
             "secret_access_key":"S3_TEMP_SECRET_ACCESS_KEY",
             "access_key_id":"S3_TEMP_ACCESS_KEY_ID"},
          "expires_at":"YYYY-mm-ddThh:MM:ssZ",
          "bucket":"DESTINATION_BUCKET"}
        }
         */
        PrepareStudyUploadResponse response = new PrepareStudyUploadResponse();
        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        String accessKey = "";
        String secretKey = "";
        String sessionToken = "";
        try {
            while (!jp.isClosed()) {
                JsonToken token = jp.nextToken();
                if (token == JsonToken.FIELD_NAME) {
                    String fieldName = jp.getText();
                    token = jp.nextToken();
                    if (token != JsonToken.VALUE_NULL) {
                        if ("hash_id".equals(fieldName)) {
                            response.setHashId(jp.getText());
                        } else if ("service_name".equals(fieldName)) {
                            response.setServiceName(jp.getText());
                        } else if ("session_token".equals(fieldName)) {
                            sessionToken = jp.getText();
                        } else if ("secret_access_key".equals(fieldName)) {
                            secretKey = jp.getText();
                        } else if ("access_key_id".equals(fieldName)) {
                            accessKey = jp.getText();
                        } else if ("expires_at".equals(fieldName)) {
                            response.setExpires(DateTimeUtils.gmtStringToDate(jp.getText()));
                        } else if ("bucket".equals(fieldName)) {
                            response.setBucket(jp.getText());
                        }
                    }
                }

            }
        } finally {
            jp.close();
        }
        AWSSessionCredentials awsCredentials =
                new BasicSessionCredentials(accessKey, secretKey, sessionToken);
        response.setAwsCredentials(awsCredentials);
        return response;
    }

    private SignupUserResponse doSignupUser(SignupUserRequest request) throws Exception {
        String responseMessage = rawRequest(request, buildUserJson(request));
        /*
        Response example:
        {"hash_id": "44fd65c1f4180c458d87b611bd4462da73b42aa0" }
         */
        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        SignupUserResponse response = new SignupUserResponse();
        try {
            while (!jp.isClosed()) {
                JsonToken token = jp.nextToken();
                if (token == JsonToken.FIELD_NAME) {
                    String fieldName = jp.getText();
                    token = jp.nextToken();
                    if (token != JsonToken.VALUE_NULL) {
                        if ("hash_id".equals(fieldName)) {
                            response.setHashId(jp.getText());
                        }
                    }
                }
            }
        } finally {
            jp.close();
        }

        return response;
    }

    private String buildUserJson(final SignupUserRequest request) throws IOException {
        StringWriter sw = new StringWriter();
        JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        /*
        {
        Request example:
            "email": "saul@bettercallsaul.com",
           "first_name": "Saul",
           "middle_name": "McGil",
           "last_name": "Goodman",
           "name": "Saul Goodman",
           "gender": 0,   ”birthdate": “1969-02-15”,
           "encrypted_data": “{}",
           ”phone": “+1-505-503-4455”,
           "address1”: ”12 Amiga Persillia Rd”,
           ”address2”: ”Suite #1”,
           ”zipcode”: “9944321”,
           ”city”: “Albuquerque”,
           ”region": “NM”,
           ”country”: ”USA”,
           ”birth_year”: 1969,
           ”height": 181,
           ”weight": 79,,
           ”animal_type": "Hyena",
           "animal_breed": "Lone Wolf,
           "animal_castrated": 1,

           "relation": "doctor_patient"
        }
         */
        UserPojo user = request.getUser();
        try {
            jg.writeStartObject();
            writeStringFieldIfNotNull("hash_id", user.getHashId(), jg);
            writeStringFieldIfNotNull("email", user.getEmail(), jg);
            writeStringFieldIfNotNull("first_name", user.getFirstName(), jg);
            writeStringFieldIfNotNull("middle_name", user.getMiddleName(), jg);
            writeStringFieldIfNotNull("last_name", user.getLastName(), jg);
            writeStringFieldIfNotNull("name", user.getName(), jg);
            jg.writeNumberField("gender", user.getGender());
            writeEncryptedData(user, jg);
            writeStringFieldIfNotNull("phone", user.getPhone(), jg);
            writeStringFieldIfNotNull("address1", user.getAddress1(), jg);
            writeStringFieldIfNotNull("address2", user.getAddress2(), jg);
            writeStringFieldIfNotNull("zipcode", user.getZipCode(), jg);
            writeStringFieldIfNotNull("city", user.getCity(), jg);
            writeStringFieldIfNotNull("region", user.getRegion(), jg);
            writeStringFieldIfNotNull("country", user.getCountry(), jg);
            writeStringFieldIfNotNull("anamnesis", user.getAnamnesis(), jg);
            writeStringFieldIfNotNull("icd_code", user.getCodeICD(), jg);
            jg.writeNumberField("birth_year", user.getBirthYear());
            writeStringFieldIfNotNull("birthdate", formatBirthDate(user.getBirthDate()), jg);
            jg.writeNumberField("height", user.getHeight());
            jg.writeNumberField("weight", user.getWeight());
            writeStringFieldIfNotNull("animal_type", user.getAnimalType(), jg);
            writeStringFieldIfNotNull("animal_breed", user.getAnimalBreed(), jg);
            jg.writeNumberField("animal_castrated", user.getAnimalCastrated());
            writeStringFieldIfNotNull("relation", request.getRelation(), jg);
//            writeStringFieldIfNotNull("metadata", createUserMetadata(user), jg);
            writeStringFieldIfNotNull("external_data", createUserExternalData(user), jg);
            jg.writeEndObject();
        } finally {
            jg.close();
        }
        return sw.toString();
    }

    private static final SimpleDateFormat userDateFormat = new SimpleDateFormat("yyyy-MM-dd");

    private String formatBirthDate(final Date birthDate) {
        String result = null;
        if (birthDate != null) {
            result = userDateFormat.format(birthDate);
        }
        return result;
    }

    private Date parseBirthDate(final String birthDate) {
        Date date = null;
        try {
            date = userDateFormat.parse(birthDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }


    private void writeEncryptedData(final UserPojo user, final JsonGenerator jg) throws IOException {
        writeStringFieldIfNotNull("encrypted_data", getEncryptedString(user), jg);
    }

    private String getEncryptedString(final UserPojo user) throws IOException {
        final StringWriter sw = new StringWriter();
        final JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        jg.writeStartObject();
        writeStringFieldIfNotNull("encryption_type", user.getEncryptionType(), jg);
        writeStringFieldIfNotNull("data", user.getEncryptedData(), jg);
        writeStringFieldIfNotNull("format", user.getFormat(), jg);
        writeStringFieldIfNotNull("checksum", user.getChecksum(), jg);
        jg.writeEndObject();
        jg.close();
        return sw.toString();
    }


    private UserPojo parseEncryptedData(final UserPojo user, final JsonParser jp) throws IOException {
        final String encrypted = jp.getText();
        final JsonParser jp2 = jsonFactory.createJsonParser(encrypted);
        JsonToken token = jp2.nextToken();
        while (token != JsonToken.END_OBJECT) {
            if (token == JsonToken.FIELD_NAME) {
                final String fieldName = jp2.getText();
                jp2.nextToken();
                if ("encryption_type".equals(fieldName)) {
                    user.setEncryptionType(jp2.getText());
                } else if ("data".equals(fieldName)) {
                    user.setEncryptedData(jp2.getText());
                } else if ("format".equals(fieldName)) {
                    user.setFormat(jp2.getText());
                } else if ("checksum".equals(fieldName)) {
                    user.setChecksum(jp2.getText());
                }
            }
            token = jp2.nextToken();
        }
        return user;
    }

    private UpdateUserResponse doUpdateUser(UpdateUserRequest request) throws Exception {
        String responseMessage = rawRequest(request, buildUserJson(request));
        UpdateUserResponse response = new UpdateUserResponse();
        UserPojo user = null;
        final JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        try {
            user = parseUserJson(jp, new UserPojo());
        } finally {
            jp.close();
        }
        response.setUser(user);
        return response;
    }

    private UpdateStudyResponse doUpdateStudy(final UpdateStudyRequest request) throws Exception {
        final String responseMessage = rawRequest(request, buildStudyJson(request));
        final UpdateStudyResponse response = new UpdateStudyResponse();
        StudyPojo study = null;
        final JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        try {
            study = parseStudyJson(jp, new StudyPojo());
        } finally {
            jp.close();
        }
        response.setStudy(study);
        return response;
    }

    private ListPatientsResponse doListPatients(ListPatientsRequest request) throws Exception {

        String responseMessage = rawRequest(request, createSortedRequestMessage(request));
        assertError(responseMessage, jsonFactory);
        /*
        Response example:
        {
          {
            "items": [
              {
              "id": 7,
              "email": “saul@bettercallsaul.com",
              "first_name": “Saul”,
              ”middle_name": “McGill”,
              ”last_name”:”Goodman”,
              ”name”:”Saul “Goodman,
              ”gender”:1,
              ”birthdate": “1969-02-15”,
              "hash_id": "40ED03973001DF0324AA6E8390B94879A933A680",
              "encrypted_data": “{}",
              ”phone": “+1-505-503-4455”,
              "address1”: ”12 Amiga Persillia Rd”,
              ”address2”: ”Suite #1”,
              ”zipcode”: “9944321”,
              ”city”: “Albuquerque”,
              ”region": “NM”,
              ”zipcode”: “9944321”,
              ”country”: ”USA”,
              ”birth_year”: 1969,
              ”height": 181,
              ”weight": 79,,
              ”animal_type": null,
              "animal_breed": null,
              "animal_castrated": null
              }],
            "page": 0,
            "items_per_page": 50,
            "total_pages": 0,
            "total_items”:1
          }
         */
        ListPatientsResponse response = new ListPatientsResponse();
        return parseSortedResponse(responseMessage, response, UserPojo.class);
    }

    private <T extends SortedResponse> T parseSortedResponse(
            String responseMessage,
            T response,
            Class<?> pojoClass
    ) throws IOException, ParseException {
        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        try {
            while (!jp.isClosed()) {
                JsonToken token = jp.nextToken();
                if (token == JsonToken.FIELD_NAME) {
                    String fieldName = jp.getText();
                    token = jp.nextToken();
                    if (token != JsonToken.VALUE_NULL) {
                        if ("items".equals(fieldName)) {
                            while (token != JsonToken.END_ARRAY) {
                                token = jp.nextToken();
                                if (token == JsonToken.START_OBJECT) {

                                    if (pojoClass == UserPojo.class) {
                                        UserPojo user = new UserPojo();
                                        parseUserJson(jp, user);
                                        //noinspection unchecked
                                        response.getItems().add(user);
                                    } else if (pojoClass == StudyPojo.class) {
                                        StudyPojo study = new StudyPojo();
                                        parseStudyJson(jp, study);
                                        //noinspection unchecked
                                        response.getItems().add(study);
                                    }

                                }
                            }
                        } else if ("page".equals(fieldName)) {
                            response.setPageNumber(jp.getIntValue());
                        } else if ("items_per_page".equals(fieldName)) {
                            response.setItemsPerPage(jp.getIntValue());
                        } else if ("total_items".equals(fieldName)) {
                            response.setTotalItems(jp.getIntValue());
                        }
                    }
                }
            }
        } finally {
            jp.close();
        }
        return response;
    }

    private StudyUploadedResponse doStudyUploaded(StudyUploadedRequest request) throws Exception {
        String responseMessage = rawRequest(request, buildStudyJson(request));

        JsonParser jp = jsonFactory.createJsonParser(responseMessage);
        /*
        Response example:
        {"hash_id": “9F178D20AFEC6BEC7E2184A644ED4A5969CC6CD3”}
         */
        StudyUploadedResponse response = new StudyUploadedResponse();
        try {
            while (!jp.isClosed()) {
                JsonToken token = jp.nextToken();
                if (token == JsonToken.FIELD_NAME) {
                    String fieldName = jp.getText();
                    token = jp.nextToken();
                    if (token != JsonToken.VALUE_NULL) {
                        if ("hash_id".equals(fieldName)) {
                            response.setHashId(jp.getText());
                        }
                    }
                }
            }
        } finally {
            jp.close();
        }
        return response;
    }

    private String buildStudyJson(final StudyUploadedRequest request) throws IOException {
        StringWriter sw = new StringWriter();
        JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        /*
        Request example:
        {
          "metadata": "{\"param\": \"value\"}",
          "creator_hash_id": "91A55F53524B53915E5CCC3AA56740107C3BBD21",
          "patient_hash_id": "40ED03973001DF0324AA6E8390B94879A933A680",
          "external_link": "https://s3.amazonaws.com/beecardia05.witalize.com/Rec12B8D32D41CCE7925B17429A6506A6CD4102873E.2013_10_03_11_36_37.sig",
          "start_time": "2013-11-01T10:14:23",
          "start_time_zone": "000",
          "duration": 86400,
          "sampling_rate": 400,
          "number_of_samples": 34560033,
          "units_per_mv": 200,
          "ecg_data_block_size": 400,
          "number_of_leads": 3,
          "device_class": "Arnika",
          "device_number": "12223",
          "gender": 1,
          "age": 49,
          "weight": 79,
          "height": 188.5,
          "blood_pressure": "120/90",
          "idc": "idc_code1, idc_code2",
          "anamnesis": "Therapy with prednisolone",
          "medicine": "Aspirin",
          "metadata": "{\"param\": \"value\"}",
          "external_data": "hash1, hash2, hash3",
          "status": 2
        }
         */
        StudyPojo study = request.getStudy();
        try {
            jg.writeStartObject();
            writeStringFieldIfNotNull("hash_id", study.getStudyHashId(), jg);
            writeStringFieldIfNotNull("creator_hash_id", study.getCreatorHashId(), jg);
            writeStringFieldIfNotNull("patient_hash_id", study.getPatientHashId(), jg);
            writeStringFieldIfNotNull("link", study.getExternalLink(), jg);
            writeStringFieldIfNotNull("start_time", DateTimeUtils.dateToGMTString(study.getStartTime()), jg);
//            jg.writeStringField("start_time_zone", study.getStartTimeZone() == null ?
//                    DateTimeUtils.getTimeZoneName() : study.getStartTimeZone());
            jg.writeStringField("start_time_zone", Integer.toString(study.getStartTimeZoneOffset()));
            jg.writeNumberField("duration", study.getDuration());
            jg.writeNumberField("sampling_rate", study.getSamplingRate());
            jg.writeNumberField("number_of_samples", study.getNumberOfSamples());
            jg.writeNumberField("units_per_mv", study.getUnitsPerMv());
            jg.writeNumberField("ecg_data_block_size", study.getEcgDataBlockSize());
            jg.writeNumberField("number_of_leads", study.getNumberOfLeads());
            jg.writeNumberField("gender", study.getGender());
            jg.writeNumberField("age", study.getAge());
            jg.writeNumberField("weight", study.getWeight());
            jg.writeNumberField("height", study.getHeight());
            writeStringFieldIfNotNull("anamnesis", study.getAnamnesis(), jg);
            writeStringFieldIfNotNull("icd_code", study.getCodeICD(), jg);

            writeStringFieldIfNotNull("device_class", study.getDeviceClass(), jg);
            writeStringFieldIfNotNull("device_number", study.getDeviceNumber(), jg);

            // my metadata
//            jg.writeStringField("metadata",createStudyMetadata(study));
            jg.writeStringField("external_data", createStudyExternalData(study));
            writeStringFieldIfNotNull("bucket", study.getAwsS3bucketName(), jg);
            jg.writeNumberField("status", study.getStatus());

            jg.writeEndObject();
        } finally {
            jg.close();
        }
        return sw.toString();
    }

    private ListStudiesResponse doListCreatedStudies(ListStudiesRequest request) throws Exception {
        String responseMessage = rawRequest(request, createSortedRequestMessage(request));
        ListStudiesResponse response = new ListStudiesResponse();
        parseSortedResponse(responseMessage, response, StudyPojo.class);
        return response;
    }

    private ListPatientStudiesResponse doListPatientStudies(ListPatientStudiesRequest request) throws Exception {
        String responseMessage = rawRequest(request, createSortedRequestMessage(request));
        ListPatientStudiesResponse response = new ListPatientStudiesResponse();
        parseSortedResponse(responseMessage, response, StudyPojo.class);
        return response;
    }

    public String rawRequest(BeeRequest request, String message) throws Exception {
        final String rawResponse = restProcessor.request(
                request.getBeeCredentials(),
                request.getMethod(),
                message
        );
        assertError(rawResponse, jsonFactory);
        return rawResponse;
    }

    private String createSortedRequestMessage(SortedRequest request) throws IOException {
        StringWriter sw = new StringWriter();
        JsonGenerator jg = jsonFactory.createJsonGenerator(sw);
        /*
        {
          “sort_by”: “age”,
          “order”: “DESC”,
          “page”: 1,
          “limit”: 20
        }
         */
        try {
            jg.writeStartObject();
            if (request instanceof ListPatientStudiesRequest) {
                ListPatientStudiesRequest req = (ListPatientStudiesRequest) request;
                jg.writeStringField("patient_hash_id", req.getPatientHashId());
            }
            if (request.getSortBy() != null) {
                jg.writeStringField("sort_by", request.getSortBy());
            }

            jg.writeStringField("order", request.getSortOrder().toString());
            jg.writeNumberField("page", request.getPage());
            if (request.getLimit() > 0) {
                jg.writeNumberField("limit", request.getLimit());
            }
            jg.writeEndObject();
        } finally {
            jg.close();
        }
        return sw.toString();
    }

    private void assertError(String jsonResponse, JsonFactory jf) throws IOException, BeeServiceException {
        JsonParser jp = jf.createJsonParser(jsonResponse);
        try {
            while (!jp.isClosed()) {
                JsonToken token = jp.nextToken();
                if (token == JsonToken.FIELD_NAME) {
                    if ("error".equals(jp.getText()) || "err".equals(jp.getText())) {
                        token = jp.nextToken();
                        int code = -1;
                        if (token == JsonToken.VALUE_NUMBER_INT) {
                            /*
                            Example:
                            {"error":11}
                             */
                            code = jp.getIntValue();
                        } else if (token == JsonToken.START_OBJECT) {
                            /*
                            Example:
                            {"error":{"message":"access key not found","type":11}}
                             */
                            while (token != JsonToken.END_OBJECT) {
                                token = jp.nextToken();
                                if (token == JsonToken.FIELD_NAME) {
                                    String fieldName = jp.getText();
                                    token = jp.nextToken();
                                    if ("type".equals(fieldName)) {
                                        if (token == JsonToken.VALUE_NUMBER_INT) {
                                            code = jp.getIntValue();
                                        }
                                    }
                                }
                            }
                        } else if (token == JsonToken.VALUE_STRING) {
                            throw new BeeServiceException(jp.getText());
                        }
                        BeeError beeError = null;
                        for (BeeError error : BeeError.values()) {
                            if (code == error.getId()) {
                                beeError = error;
                                break;
                            }
                        }
                        if (beeError != null) {
                            throw new BeeServiceException(beeError);
                        }
                        throw new BeeServiceException("Unknown error: " + code);
                    }
                }
            }
        } finally {
            jp.close();
        }
    }

    //------------------------------ misc --------------------------------//

    private void writeStringFieldIfNotNull(String fieldName, String value, JsonGenerator jg) throws IOException {
        if (value != null) {
            jg.writeStringField(fieldName, value);
        }
    }

    private StudyPojo parseStudyMetadata(final StudyPojo study, final String metadata) {
        if (study != null) {
            final String[] meta = metadata.split(METADATA_SEPARATOR);
            for (int i = 0; i < meta.length; i++) {
                final String val = meta[i];
                switch (i) {
                    case 0:
                        study.setLocalStudyHashId(val);
                        break;
                    case 1:
                        study.setLocalCreatorHashId(val);
                        break;
                    case 2:
                        study.setLocalPatientHashId(val);
                        break;
                    case 3:
                        study.setAwsS3bucketName(val);
                        break;
                    case 4:
                        study.setStudyPrefix(val);
                        break;
                }
            }
        }
        return study;
    }

    private String createStudyMetadata(final StudyPojo study) {
        return new StringBuilder()
                .append(blankStringIfNull(study.getLocalStudyHashId())).append(METADATA_SEPARATOR)
                .append(blankStringIfNull(study.getLocalCreatorHashId())).append(METADATA_SEPARATOR)
                .append(blankStringIfNull(study.getLocalPatientHashId())).append(METADATA_SEPARATOR)
                .append(blankStringIfNull(study.getAwsS3bucketName())).append(METADATA_SEPARATOR)
                .append(blankStringIfNull(study.getStudyPrefix()))
                .toString();
    }

    private String blankStringIfNull(final String string) {
        return string == null ? "" : string;
    }

    private UserPojo parseUserMetadata(final UserPojo user, final String metadata) {
        if (user != null) {
            final String[] meta = metadata.split(METADATA_SEPARATOR);
            for (int i = 0; i < meta.length; i++) {
                final String val = meta[i];
                switch (i) {
                    case 0:
                        user.setLocalHashId(val);
                        break;
                }
            }
        }
        return user;
    }

    private String createUserMetadata(final UserPojo user) {
        return blankStringIfNull(user.getLocalHashId());
    }

    private UserPojo parseUserExternalDataOrMeta(final UserPojo user, final String externalData) throws IOException {
        if (externalData.trim().startsWith("{")) {
            return parseUserExternalData(user, externalData);
        }
        return parseUserMetadata(user, externalData);
    }

    private StudyPojo parseStudyExternalDataOrMeta(final StudyPojo study, final String externalData) throws IOException {
        if (externalData.trim().startsWith("{")) {
            return parseStudyExternalData(study, externalData);
        }
        return parseStudyMetadata(study, externalData);
    }

    private StudyPojo parseStudyExternalData(final StudyPojo study, final String externalData) throws IOException {
        final ObjectMapper mapper = new ObjectMapper();
        final JsonNode tree = mapper.readTree(externalData);
        study.setLocalStudyHashId(getStringValue(tree, "localRecId"));
        study.setLocalCreatorHashId(getStringValue(tree, "localDocId"));
        study.setLocalPatientHashId(getStringValue(tree, "localPatId"));
        study.setAwsS3bucketName(getStringValue(tree, "s3bucket"));
        study.setStudyPrefix(getStringValue(tree, "prefix"));
        final String updateTime = getStringValue(tree, "updateTimeGMT");
        if (updateTime != null) {
            final Date ut = new Date(Long.parseLong(updateTime));
            study.setUpdateTimeGMT(ut);
        }
        return study;
    }

    private String getStringValue(final JsonNode tree, String key) {
        final JsonNode node = tree.get(key);//TODO change tree.findKey(key)(v 1.9.13) on tree.get(key)(v 1.5.0)
        String value = null;
        if (node != null) {
            value = node.getTextValue();
        }
        return value;
    }

    private String createStudyExternalData(final StudyPojo study) throws IOException {
        final Map<String, String> map = new HashMap<String, String>();
        map.put("localRecId", study.getLocalStudyHashId());
        map.put("localDocId", study.getLocalCreatorHashId());
        map.put("localPatId", study.getLocalPatientHashId());
        map.put("s3bucket", study.getAwsS3bucketName());
        map.put("prefix", study.getStudyPrefix());
        final Date updateTime = study.getUpdateTimeGMT();
        if (updateTime != null) {
            final String val = Long.toString(updateTime.getTime());
            map.put("updateTimeGMT", val);
        }
        final ObjectMapper mapper = new ObjectMapper();
        final String json = mapper.writeValueAsString(map);
//        return escapeJson(json);
        return json;
    }

    private String createUserExternalData(final UserPojo user) throws IOException {
        final Map<String, String> map = new HashMap<String, String>();
        map.put("localUserId", user.getLocalHashId());
        final long updateTimeGMT = user.getUpdateTimeGMT().getTime();
        map.put("updateTimeGMT", Long.toString(updateTimeGMT));
        final ObjectMapper mapper = new ObjectMapper();
        final String json = mapper.writeValueAsString(map);
//        return escapeJson(json);
        return json;
    }

    private UserPojo parseUserExternalData(final UserPojo user, final String externalData) throws IOException {
        final ObjectMapper mapper = new ObjectMapper();
        final JsonNode tree = mapper.readTree(externalData);
        user.setLocalHashId(getStringValue(tree, "localUserId"));
        String updateTimeGMT = getStringValue(tree, "updateTimeGMT");
        if (updateTimeGMT != null) {
            try {
                user.setUpdateTimeGMT(new Date(Long.parseLong(updateTimeGMT)));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return user;
    }

}
