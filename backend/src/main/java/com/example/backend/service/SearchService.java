package com.example.backend.service;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
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

    public List<Muscle> searchMuscles(String query) {
        return muscleService.searchMuscles(query);
    }

    public List<Exercise> searchExercises(String query) {
        return exerciseService.searchExercises(query);
    }

    public List<Machine> searchMachines(String query) {
        return machineService.searchMachines(query);
    }
}
