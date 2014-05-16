package org.openmrs.module.beecardia.web.controller;

import org.openmrs.Patient;
import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeePatient;
import org.openmrs.module.beecardia.api.enity.BeeStudy;
import org.openmrs.module.beecardia.api.service.BeePatientService;
import org.openmrs.module.beecardia.api.service.BeeStudyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Tolik on 14.05.2014.
 */
@Controller
public class PatientController {

    @RequestMapping(value = "/module/beecardia/patient/{patientId}.form")
    public String index(ModelMap model, @PathVariable int patientId) {

        model.put("patientId", patientId);
        model.put("patients", Context.getService(BeePatientService.class).getAll());

        return "module/beecardia/patient/index";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/bind.form", method = RequestMethod.GET)
    public String bind(ModelMap model,
                       @RequestParam("patientId") int patientId,
                       @RequestParam("beePatientId") int beePatientId) {

        BeePatientService patientService = Context.getService(BeePatientService.class);
        BeePatient patient = patientService.getById(beePatientId);
        patient.setOpenmrsPatientId(patientId);
        patientService.update(patient);
        model.put("studies", patient.getBeeStudyList());

        return "redirect:/module/beecardia/patient/" + patientId + "/study/index.form";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/study/index.form", method = RequestMethod.GET)
    public String studies(ModelMap model,
                          @PathVariable int patientId) {

        Patient patient = Context.getPatientService().getPatient(patientId);
        BeePatientService service = Context.getService(BeePatientService.class);
        model.addAttribute("patient", patient);
        model.addAttribute("studies", service.getByOpenmrsId(patientId).getBeeStudyList());

        return "module/beecardia/study/index";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/study/{studyId}", method = RequestMethod.GET)
    public String viewer(@PathVariable("studyId") int id, ModelMap model) {

        BeeStudy study = Context.getService(BeeStudyService.class).getById(id);
        int patientId = study.getBeePatient().getOpenmrsPatientId();
        Patient patient = Context.getPatientService().getPatient(patientId);
        model.addAttribute("study", study);
        model.addAttribute("patient", patient);

        return "module/beecardia/viewer";
    }
}
