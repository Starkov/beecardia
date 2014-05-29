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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Tolik on 14.05.2014.
 */
@Controller
public class PatientController {

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/binding.form")
    public String index(ModelMap model, @PathVariable int patientId) {

        List<Patient> openmrsPatients = Context.getPatientService().getAllPatients();
        List<BeePatient> beePatients = Context.getService(BeePatientService.class).getAll();
        Map<Patient, BeePatient> map = new HashMap<Patient, BeePatient>();

        for (Patient p : openmrsPatients) {
            for (BeePatient beeP : beePatients) {
                if (p.getId() == beeP.getOpenmrsPatientId()) {
                    map.put(p, beeP);
                }
            }
            if (map.containsKey(p)) {
                beePatients.remove(map.get(p));
            }
        }

        model.put("openmrsPatient", Context.getPatientService().getPatient(patientId));
        model.put("map", map);
        model.put("beePatients", beePatients);

        return "module/beecardia/patient/binding";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/bind.form", method = RequestMethod.GET)
    public String bind(ModelMap model,
                       @RequestParam("patientId") int patientId,
                       @RequestParam("beePatientId") int beePatientId) {

        BeePatientService patientService = Context.getService(BeePatientService.class);

        if (patientService.getByOpenmrsId(patientId) != null) {
            BeePatient beePatient = patientService.getByOpenmrsId(patientId);
            beePatient.setOpenmrsPatientId(null);
            patientService.update(beePatient);
        }

        BeePatient beePatient = patientService.getById(beePatientId);
        beePatient.setOpenmrsPatientId(patientId);
        patientService.update(beePatient);
        model.put("studies", beePatient.getBeeStudyList());

        return "redirect:/module/beecardia/patient/" + patientId + "/study/index.form ";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/study/index.form", method = RequestMethod.GET)
    public String studies(ModelMap model,
                          @PathVariable int patientId) {
        try {
            Patient patient = Context.getPatientService().getPatient(patientId);
            BeePatientService service = Context.getService(BeePatientService.class);
            model.addAttribute("openmrsPatient", patient);
            model.addAttribute("studies", service.getByOpenmrsId(patientId).getBeeStudyList());
        } catch (Exception e) {
            return "redirect:/module/beecardia/patient/{patientId}/binding.form";
        }
        return "module/beecardia/study/index";
    }

    @RequestMapping(value = "/module/beecardia/patient/{patientId}/study/{studyId}", method = RequestMethod.GET)
    public String viewer(@PathVariable("studyId") int id, ModelMap model) {
        try {
            BeeStudy study = Context.getService(BeeStudyService.class).getById(id);
            int patientId = study.getBeePatient().getOpenmrsPatientId();
            Patient patient = Context.getPatientService().getPatient(patientId);
            model.addAttribute("study", study);
            model.addAttribute("openmrsPatient", patient);
        } catch (Exception e) {
            return "redirect:/patientDashboard.form?patientId=" + id;
        }
        return "module/beecardia/viewer";
    }

    @RequestMapping(value = "/module/beecardia/patient/{id}/study/patientDashboard.form", method = RequestMethod.GET)
    public String patientDashboard(@PathVariable int id) {
        return "redirect:/patientDashboard.form?patientId=" + id;
    }
}
