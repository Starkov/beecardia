package org.openmrs.module.beecardia.web.controller;

import org.openmrs.api.context.Context;
import org.openmrs.module.beecardia.BeeDoctor;
import org.openmrs.module.beecardia.api.BeeDoctorService;
import org.openmrs.module.beecardia.api.BeecardiaSyncService;
import org.openmrs.module.beecardia.client.api.BeeServiceException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BeecardiaController {

    @RequestMapping(value = "/module/beecardia/index.form", method = RequestMethod.GET)
    public void index(ModelMap map) {
        map.addAttribute("doctor", new BeeDoctor());
    }

    @RequestMapping(value = "/module/beecardia/show.form", method = RequestMethod.GET)
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
                model.addAttribute("error", "No server connection!");
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
                model.addAttribute("error", "No server connection!");
            } finally {
                doctorService.delete(newDoctor);
                return "redirect:index.form";
            }
        }
        return "show";
    }
}
