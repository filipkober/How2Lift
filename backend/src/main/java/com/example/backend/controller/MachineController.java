package com.example.backend.controller;
import com.example.backend.mapper.ExerciseMapper;
import com.example.backend.mapper.MachineMapper;
import com.example.backend.mapper.MuscleMapper;
import com.example.backend.record.ExerciseDTO;
import com.example.backend.record.MachineDTO;
import com.example.backend.record.MachineSearchResult;
import com.example.backend.record.MuscleDTO;
import com.example.backend.service.ExerciseService;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
public class MachineController {

    private final ExerciseMapper exerciseMapper;
    private final MuscleMapper muscleMapper;
    @Value("${upload.password}")
    private String uploadPassword;

    private final MachineService machineService;
    private final MuscleService muscleService;
    private final ExerciseService exerciseService;
    private final MachineMapper machineMapper;

    @Autowired
    public MachineController(MachineService machineService, MuscleService muscleService, ExerciseService exerciseService, MachineMapper machineMapper, ExerciseMapper exerciseMapper, MuscleMapper muscleMapper) {
        this.machineService = machineService;
        this.muscleService = muscleService;
        this.exerciseService = exerciseService;
        this.machineMapper = machineMapper;
        this.exerciseMapper = exerciseMapper;
        this.muscleMapper = muscleMapper;
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

    @GetMapping("/machines/{id}")
    @ResponseBody
    public ResponseEntity<MachineDTO> getMachineById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(machineMapper.toMachineDTO((machineService.getMachineById(id))));
    }

    @GetMapping("/machines/{id}/exercises")
    @ResponseBody
    public ResponseEntity<List<ExerciseDTO>> getMachineExercises(@PathVariable("id") Long id) {
        return ResponseEntity.ok(machineService.getMachineExercises(id).stream().map(exerciseMapper::toExerciseDTO).toList());
    }

    @GetMapping("/machines/{id}/muscles")
    @ResponseBody
    public ResponseEntity<List<MuscleDTO>> getMachineMuscles(@PathVariable("id") Long id) {
        return ResponseEntity.ok(machineService.getMachineMuscles(id).stream().map(muscleMapper::toMuscleDTO).toList());
    }
}
