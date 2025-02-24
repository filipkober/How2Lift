package com.example.backend.controller;

import com.example.backend.model.Machine;
import com.example.backend.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
public class AIController {

    private final OpenAIService openAIService;

    @Autowired
    public AIController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/ai/machines")
    @ResponseBody
    public ResponseEntity<List<Machine>> identifyMachines(@RequestParam("file") MultipartFile file) {

        Resource resource = file.getResource();

        return ResponseEntity.ok(openAIService.identifyMachines(resource));
    }

    @PostMapping("/ai/suggest/muscles")
    @ResponseBody
    public ResponseEntity<List<String>> suggestMuscles() {
        return ResponseEntity.ok(openAIService.suggestNewMuscleNames());
    }
}
