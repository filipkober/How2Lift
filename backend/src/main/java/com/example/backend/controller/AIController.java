package com.example.backend.controller;

import com.example.backend.record.ExerciseDTO;
import com.example.backend.record.MachineDTO;
import com.example.backend.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/ai")
public class AIController {

    private final OpenAIService openAIService;

    @Value("${upload.password}")
    private String uploadPassword;

    @Autowired
    public AIController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/machines")
    public ResponseEntity<List<MachineDTO>> identifyMachines(@RequestParam("file") MultipartFile file) {

        Resource resource = file.getResource();

        return ResponseEntity.ok(openAIService.identifyMachines(resource));
    }

    @PostMapping("/suggest/muscles")
    public ResponseEntity<List<String>> suggestMuscles(String password) {

        if(!password.equals(uploadPassword))
            return ResponseEntity.status(403).build();

        return ResponseEntity.ok(openAIService.suggestNewMuscleNames());
    }

    @PostMapping("/suggest/machines")
    public ResponseEntity<List<MachineDTO>> suggestMachines(String password) {

        if(!password.equals(uploadPassword))
            return ResponseEntity.status(403).build();

        return ResponseEntity.ok(openAIService.suggestNewMachines());
    }

    @PostMapping("/suggest/exercises")
    public ResponseEntity<List<ExerciseDTO>> suggestExercises(String password) {

        if(!password.equals(uploadPassword))
            return ResponseEntity.status(403).build();

        return ResponseEntity.ok(openAIService.suggestNewExercises());
    }
}
