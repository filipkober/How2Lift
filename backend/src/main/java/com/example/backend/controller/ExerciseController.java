package com.example.backend.controller;

import com.example.backend.mapper.ExerciseMapper;
import com.example.backend.model.Exercise;
import com.example.backend.record.ExerciseSearchResult;
import com.example.backend.record.MachineSearchResult;
import com.example.backend.service.ExerciseService;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Controller
public class ExerciseController {

    @Value("${upload.password}")
    private String uploadPassword;

    private final ExerciseService exerciseService;
    private final MuscleService muscleService;
    private final MachineService machineService;
    private final ExerciseMapper exerciseMapper;

    @Autowired
    public ExerciseController(ExerciseService exerciseService, MuscleService muscleService, MachineService machineService, ExerciseMapper exerciseMapper) {
        this.exerciseService = exerciseService;
        this.muscleService = muscleService;
        this.machineService = machineService;
        this.exerciseMapper = exerciseMapper;
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
    public String handleExerciseUpload(String name, String description, String videoUrl, @RequestParam("steps") List<String> steps, @RequestParam("commonMistakes") List<String> commonMistakes, @RequestParam("selectedMuscles") List<Long> selectedMuscles, Long machine, String password) {

        if (!password.equals(uploadPassword))
            return "redirect:/forms/exercises";

        System.out.println(selectedMuscles);

        var trainedMuscles = new HashSet<>(muscleService.getMusclesByIds(selectedMuscles));

        System.out.println(trainedMuscles);

        var usedInMachine = machineService.getMachineById(machine);

        exerciseService.createExercise(name, description, steps, commonMistakes, videoUrl, trainedMuscles, usedInMachine);
        return "redirect:/forms/exercises";
    }

    @GetMapping("/exercises")
    @ResponseBody
    public ResponseEntity<List<ExerciseSearchResult>> getExercises() {
        return ResponseEntity.ok(exerciseService.getAllExercises().stream().map(exerciseMapper::toExerciseSearchResult).toList());
    }

    @GetMapping("/exercises/{id}")
    @ResponseBody
    public ResponseEntity<Exercise> getExercise(@PathVariable("id") Long id) {
        return ResponseEntity.ok(exerciseService.getExerciseById(id));
    }
}
