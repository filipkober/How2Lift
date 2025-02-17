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

import java.util.HashSet;
import java.util.List;

@Controller
public class ExerciseController {

    @Value("${upload.password}")
    private String uploadPassword;

    private final ExerciseService exerciseService;
    private final MuscleService muscleService;
    private final MachineService machineService;

    @Autowired
    public ExerciseController(ExerciseService exerciseService, MuscleService muscleService, MachineService machineService) {
        this.exerciseService = exerciseService;
        this.muscleService = muscleService;
        this.machineService = machineService;
    }

    @GetMapping("/forms/exercises")
    public String viewExerciseUploadForm(Model model) {

        var muscles = muscleService.getAllMuscles();
        var machines = machineService.getAllMachines();
        var exercises = exerciseService.getAllExercises();

        model.addAttribute("muscles", muscles);
        model.addAttribute("machines", machines);
        model.addAttribute("exercises", exercises);

        return "exerciseForm";
    }

    @PostMapping("/forms/exercises")
    public String handleExerciseUpload(String name, String description, String videoUrl, String steps, String commonMistakes, @RequestParam("selectedMuscles") List<Long> selectedMuscles, Long machine, String password) {

        if (!password.equals(uploadPassword))
            return "redirect:/forms/exercises";

        var trainedMuscles = new HashSet<>(muscleService.getMusclesByIds(selectedMuscles));
        var usedInMachine = machineService.getMachineById(machine);

        exerciseService.createExercise(name, description, steps, commonMistakes, videoUrl, trainedMuscles, usedInMachine);
        return "redirect:/forms/exercises";
    }
}
