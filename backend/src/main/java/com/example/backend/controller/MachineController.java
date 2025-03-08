package com.example.backend.controller;
import com.example.backend.service.ExerciseService;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@Controller
public class MachineController {

    @Value("${upload.password}")
    private String uploadPassword;

    private final MachineService machineService;
    private final MuscleService muscleService;
    private final ExerciseService exerciseService;

    @Autowired
    public MachineController(MachineService machineService, MuscleService muscleService, ExerciseService exerciseService){
        this.machineService = machineService;
        this.muscleService = muscleService;
        this.exerciseService = exerciseService;
    }

    @GetMapping("/forms/machines")
    public String viewMachineUploadForm(Model model) {

        var muscles = muscleService.getAllMuscles();
        var machines = machineService.getAllMachines();

        model.addAttribute("muscles", muscles);
        model.addAttribute("selectedMuscles", new ArrayList<>());
        model.addAttribute("machines", machines);

        return "machineForm";
    }

    @PostMapping("/forms/machines")
    public String handleMachineUpload(@RequestParam("selectedMuscles") List<Long> selectedMuscles, String name, String description, String imageUrl, String password) {

        if (!password.equals(uploadPassword))
            return "redirect:/forms/machines";

        var muscleSet = new HashSet<>(muscleService.getMusclesByIds(selectedMuscles));
        var exerciseSet = new HashSet<>(exerciseService.getExercises(new ArrayList<>()));

        machineService.createMachine(name, description, imageUrl, muscleSet, exerciseSet);
        return "redirect:/forms/machines";
    }
}
