package com.example.backend.service;

import com.example.backend.record.ExerciseDTO;
import com.example.backend.record.MachineDTO;
import com.example.backend.record.MuscleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    private final MuscleService muscleService;
    private final ExerciseService exerciseService;
    private final MachineService machineService;

    @Autowired
    public SearchService(MuscleService muscleService, ExerciseService exerciseService, MachineService machineService) {
        this.muscleService = muscleService;
        this.exerciseService = exerciseService;
        this.machineService = machineService;
    }

    public List<MuscleDTO> searchMuscles(String query) {
        return muscleService.searchMuscles(query);
    }

    public List<ExerciseDTO> searchExercises(String query) {
        return exerciseService.searchExercises(query);
    }

    public List<MachineDTO> searchMachines(String query) {
        return machineService.searchMachines(query);
    }
}
