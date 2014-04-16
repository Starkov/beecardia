<%@ include file="/WEB-INF/template/include.jsp" %>
<%@ include file="/WEB-INF/template/header.jsp" %>

<%@ include file="template/localHeader.jsp" %>

<iframe>
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Viewer</title>
        <%--<link href="/assets/bcViewer/iframe-5d85443a3f937bd31bb41424edad57d7.css" media="screen" rel="stylesheet" type="text/css" />--%>
        <openmrs:htmlInclude file="/moduleResources/css/iframe-5d85443a3f937bd31bb41424edad57d7.css"/>
        <style type="text/css">
            body {
                background-color: #ffffff;
            }
        </style>

        <link href="/moduleResources/css/bcViewer-fe8619ee6666d7bc6561997784c964e3.css" media="print, screen"
              rel="stylesheet" type="text/css"/>

        <script src="/moduleResources/js/jquery_depends-c3c9014e2d8c0815f9256a2f70cb9a66.js"
                type="text/javascript"></script>

        <script src="/moduleResources/js/bcViewer-deb98fdc553b2a2eba1c675593d3719d.js" type="text/javascript"></script>
        <script type="text/javascript">
            if (typeof bcGlobals === 'undefined') bcGlobals = {};

            bcGlobals.locale = {
                events: {"e_12": "Arrhythmia", "e_9": "Rhythm", "e_1": "HR", "e_14": "Pause", "e_2": "Patient", "e_15": "Pause 1700", "e_3": "Bookmark", "e_16": "Pause 3000", "e_10": "Tachycardia", "e_17": "Pause 2RR", "e_11": "Bradycardia", "e_19": "SVEC", "e_32": "VEC - Triplet N:3", "e_33": "VEC - Run N:>3", "e_34": "R on T", "e_36": "S-T ch.1", "e_30": "VEC - Trigeminy", "e_37": "S-T ch.2", "e_35": "S-T segment", "e_31": "VEC - Couple N:2", "e_38": "S-T ch.3", "e_20": "SVEC - Single N:1", "e_27": "VEC", "e_21": "SVEC - Bigeminy", "e_28": "VEC - Single N:1", "e_22": "SVEC - Trigeminy", "e_29": "VEC - Bigeminy", "e_23": "SVEC  - Couple N:2", "e_24": "SVEC - Triplet N:3", "e_25": "SVEC - Run N:>3"},
                channelAbbreviation: "Ch.${channel_number}",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:MM:SS",
                currentDetailsSeperator: "|",
                timeSpanFromStart: "${timeSpan} hours:min:sec from start",
                timeSpanFormat: "${startTime}-${endTime}",
                currentViewZoom: "${zoom} mm/second",
                currentViewAmpl: "${ampl} mm/mV",
                measurementResult: "${zoom} ms ${hr_str}    ${ampl} mkV",
                measurementHRResult: "(${hr} bpm)",
                birthdate_format: "MM.dd.yyyy"
            };
        </script>


        <script type="text/javascript">
            var config = new bcViewer.Config();
            var url =
            var recordType = 2;

            if ((recordType === 1) ||
                    (recordType === 2)) {
                config.eventsViewer = { HIDDEN: true };
                config.HRViewer = { HIDDEN: true };
            }

            var viewer = new bcViewer({
                recordHash: '',
                recordURL: '',
                recordType: recordType
            }, config);
        </script>


    </head>
    <body>


    <script id="bcv_dropdown_option" type="text/x-jquery-tmpl">
        <option value="${value}">${text}</option>
    </script>

    <script id="bcv_current_info_with_date" type="text/x-jquery-tmpl">
        <span>${date} ${currentDetailsSeperator} ${timeSpan} ${currentDetailsSeperator} ${zoom} ${ampl}</span>
    </script>

    <script id="bcv_current_info_no_date" type="text/x-jquery-tmpl">
        <span>${timeSpanFromStart} ${currentDetailsSeperator} ${zoom} ${ampl}</span>
    </script>

    <div id="bc_viewer">
        <div class="bcv_top">
            <!--
                    <div class="bcv_header">
                        <span class="bcv_record_title">Record 152</span>
                        <span class="bcv_record_details_container">
                            Age: <span class="bcv_record_details_value">81</span>
                            Sex: <span class="bcv_record_details_value">Female</span>
                            CG Date: <span class="bcv_record_details_value">17/10/1990</span>
                        </span>
                    </div>
            -->
            <div class="bcv_events_container">
                <div class="bcv_events_viewer_headers">
                    <div class="bcv_timeline_header bcv_events_viewer_header"></div>
                    <div class="bcv_hr_header bcv_events_viewer_header">
                        <div>HR</div>
                    </div>
                    <div class="bcv_events_header bcv_events_viewer_header">
                        <select class="bcv_events_list"></select>
                        <button class="bcv_event_button bcv_event_prev bcv_sprite" title="Previous event"></button>
                        <button class="bcv_event_button bcv_event_next bcv_sprite" title="Next event"></button>
                    </div>
                </div>
                <div class="bcv_event_viewer_canvases">
                    <div class="bcv_time_indicator"></div>
                    <canvas class="bcv_timeline_canvas"></canvas>
                    <canvas class="bcv_hr_canvas"></canvas>
                    <canvas class="bcv_events_canvas"></canvas>
                </div>
            </div>
            <div class="bcv_current_view_info"></div>
            <div class="bcv_measurement_result"></div>
            <span class="bcv_updating_notification">Updating...</span>
        </div>
        <div class="bcv_ecg_viewer">
            <div class="bcv_ecg_control_panel">
                <div class="bcv_controls_group bcv_zoom_x_controls">
                    <span class="bcv_controls_title">Zoom:</span>
                    <button class="bcv_zoom_x bcv_control_button" value="5">5</button>
                    <button class="bcv_zoom_x bcv_control_button" value="10">10</button>
                    <button class="bcv_zoom_x bcv_control_button" value="25">25</button>
                    <button class="bcv_zoom_x bcv_control_button" value="50">50</button>
                    <button class="bcv_zoom_x bcv_control_button" value="100">100</button>
                    <span class="bcv_controls_units">mm/second</span>
                </div>
                <div class="bcv_controls_group bcv_zoom_y_controls">
                    <span class="bcv_controls_title">Amp:</span>
                    <button class="bcv_zoom_y bcv_control_button" value="2">2</button>
                    <button class="bcv_zoom_y bcv_control_button" value="5">5</button>
                    <button class="bcv_zoom_y bcv_control_button" value="10">10</button>
                    <button class="bcv_zoom_y bcv_control_button" value="20">20</button>
                    <button class="bcv_zoom_y bcv_control_button" value="40">40</button>
                    <span class="bcv_controls_units">mm/mV</span>
                </div>
                <div class="bcv_filters_group bcv_clearfix">
                    <button class="bcv_measure_button bcv_sprite" title="Measure"></button>
                    <button class="bcv_baseline_correction_button bcv_sprite" title="Baseline correction"></button>
                    <button class="bcv_smooth_button bcv_sprite" title="Smooth"></button>
                </div>
            </div>
            <div class="bcv_canvas_wrapper">
                <div class="bcv_loading_notification"></div>
                <canvas class="bcv_main_canvas"></canvas>
            </div>
        </div>
        <div class="bcv_context_viewer">
            <select class="bcv_channels_list"></select>

            <div class="bcv_canvas_wrapper">
                <canvas class="bcv_context_canvas"></canvas>
                <div class="bcv_context_highlight"></div>
                <div class="bcv_context_highlight_on_hover"></div>
            </div>
        </div>
    </div>


    </body>
    </html>
</iframe>
<%@ include file="/WEB-INF/template/footer.jsp" %>