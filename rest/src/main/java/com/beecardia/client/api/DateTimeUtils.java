package com.beecardia.client.api;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

/**
 * User: xmitya
 * Date: 15.11.13
 * Time: 8:17
 */
public class DateTimeUtils {

    //    public static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
    public static final String DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'";

    private DateTimeUtils() {
    }

    public static String dateToString(final Date date) {
        String result = null;
        if (date != null) {
            SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);
            result = format.format(date);
        }
        return result;
    }

    public static Date stringToDate(final String date) throws ParseException {
        Date result = null;
        if (date != null) {
            SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);
            result = format.parse(date);
        }
        return result;
    }

    public static String dateToGMTString(Date date) {
        String gmt = null;
        if (date != null) {
            SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);
            format.setTimeZone(TimeZone.getTimeZone("GMT"));
            gmt = format.format(date);
        }
        return gmt;
    }

    public static Date gmtStringToDate(String gmt) throws ParseException {
        Date date = null;
        if (gmt != null) {
            SimpleDateFormat format = new SimpleDateFormat(DATE_FORMAT);
            format.setTimeZone(TimeZone.getTimeZone("GMT"));
            date = format.parse(gmt);
        }
        return date;
    }

    public static Date toGMTTime(Date date) {
        TimeZone tz = TimeZone.getDefault();
        int offset = tz.getOffset(date.getTime());
        return new Date(date.getTime() - offset);
    }

    public static Date toLocalTime(Date gmt) {
        TimeZone tz = TimeZone.getDefault();
        int offset = tz.getOffset(gmt.getTime());
        return new Date(gmt.getTime() + offset);
    }

    public static String getTimeZoneName() {
        Calendar cal = Calendar.getInstance();
        return cal.getTimeZone().getDisplayName(false, TimeZone.SHORT, Locale.US);
    }

    public static int getYear(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        return cal.get(Calendar.YEAR);
    }
}
