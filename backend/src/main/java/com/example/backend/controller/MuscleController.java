package com.example.backend.controller;

import com.example.backend.model.Muscle;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
        var muscles = muscleService.getAllMuscles();
        model.addAttribute("muscles", muscles);

        return "muscleForm";
    }

    @PostMapping("/forms/muscles")
    public String handleMuscleUpload(String name, @RequestParam("password") String password) {
        if (!password.equals(uploadPassword))
            return "redirect:/forms/muscles";

        muscleService.createMuscle(name);
        return "redirect:/forms/muscles";
    }

    @GetMapping("/muscles")
    @ResponseBody
    public ResponseEntity<Iterable<Muscle>> getMuscles() {
        return ResponseEntity.ok(muscleService.getAllMuscles());
    }

}
