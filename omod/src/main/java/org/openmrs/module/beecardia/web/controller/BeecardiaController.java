package org.openmrs.module.beecardia.web.controller;

import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.api.enity.BeeDoctor;
import org.openmrs.module.beecardia.api.service.BeeDoctorService;
import org.openmrs.module.beecardia.api.service.BeeStudyService;
import org.openmrs.module.beecardia.api.service.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.BeeServiceException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BeecardiaController {

    @RequestMapping(value = "/module/beecardia/sync.form", method = RequestMethod.GET)
    public String index(ModelMap map) {
        return "module/beecardia/sync/sync";
    }

    @RequestMapping(value = "/module/beecardia/study/{id}.form", method = RequestMethod.GET)
    public String viewer(ModelMap map, @PathVariable int id) {
        map.put("study", Context.getService(BeeStudyService.class).getById(id));
        return "module/beecardia/viewer";
    }

    @RequestMapping(value = "/module/beecardia/study/patientDashboard.form", method = RequestMethod.GET)
    public String redirectToHome() {
        return "redirect:/index.htm";
    }

    @RequestMapping(value = "/module/beecardia/show.form", method = RequestMethod.POST)
    public String show(ModelMap model,
                       @RequestParam("login") String login,
                       @RequestParam("password") String password) {

        BeecardiaSyncService syncService = Context.getService(BeecardiaSyncService.class);
        BeeDoctorService doctorService = Context.getService(BeeDoctorService.class);
        BeeDoctor doctor = doctorService.getByLogin(login);

        if (doctor != null) {
            try {
                syncService.sync(doctor);
            } catch (BeeServiceException e) {
            }
            model.addAttribute("patients", doctorService.getByLogin(login).getBeePatientList());
        } else {
            BeeDoctor newDoctor = new BeeDoctor();
            newDoctor.setLogin(login);
            newDoctor.setPassword(password);
            doctorService.save(newDoctor);
            try {
                syncService.sync(newDoctor);
                model.addAttribute("patients", doctorService.getByLogin(login).getBeePatientList());
            } catch (BeeServiceException e) {
                doctorService.delete(newDoctor);
                return "redirect:/module/beecardia/sync.form";
            }
        }
        return "module/beecardia/sync/show";
    }


}
