package com.example.backend.controller;
import com.example.backend.mapper.MachineMapper;
import com.example.backend.record.MachineSearchResult;
import com.example.backend.service.ExerciseService;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

@Controller
public class MachineController {

    @Value("${upload.password}")
    private String uploadPassword;

    private final MachineService machineService;
    private final MuscleService muscleService;
    private final ExerciseService exerciseService;
    private final MachineMapper machineMapper;

    @Autowired
    public MachineController(MachineService machineService, MuscleService muscleService, ExerciseService exerciseService, MachineMapper machineMapper) {
        this.machineService = machineService;
        this.muscleService = muscleService;
        this.exerciseService = exerciseService;
        this.machineMapper = machineMapper;
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

    @GetMapping("/machines")
    @ResponseBody
    public ResponseEntity<List<MachineSearchResult>> getMachines() {
        return ResponseEntity.ok(machineService.getAllMachines().stream().map(machineMapper::toMachineSearchResult).toList());
    }
}
