package com.example.backend.controller;

import com.example.backend.model.Muscle;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MuscleController {

    @Value("${upload.password}")
    private String uploadPassword;

    private final MuscleService muscleService;

    @Autowired
    public MuscleController(MuscleService muscleService) {
        this.muscleService = muscleService;
    }

    @GetMapping("/forms/muscles")
    public String viewMuscleUploadForm(Model model) {
        var muscleNames = muscleService.getAllMuscles().stream().map(Muscle::getName).toArray();
        model.addAttribute("muscles", muscleNames);

        return "muscleForm";
    }

    @PostMapping("/forms/muscles")
    public String handleMuscleUpload(String name, @RequestParam("password") String password) {
        if (!password.equals(uploadPassword))
            return "redirect:/forms/muscles";

        muscleService.createMuscle(name);
        return "redirect:/forms/muscles";
    }

}
