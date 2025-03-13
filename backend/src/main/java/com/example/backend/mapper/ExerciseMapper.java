package com.example.backend.mapper;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.ExerciseSearchResult;
import com.example.backend.record.ExerciseSuggestion;
import com.example.backend.record.MachineSearchResult;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class ExerciseMapper {

    private final MuscleService muscleService;
    private final MachineService machineService;

    @Autowired
    public ExerciseMapper(MuscleService muscleService, MachineService machineService) {
        this.muscleService = muscleService;
        this.machineService = machineService;
    }

    public Exercise toExercise(ExerciseSuggestion suggestion) {
        var exercise = new Exercise();
        exercise.setName(suggestion.name());
        exercise.setDescription(suggestion.description());
        exercise.setMachine(machineService.getMachineByName(suggestion.machineName()));
        exercise.setTrainedMuscles(new HashSet<>(muscleService.getMusclesByNames(suggestion.trainedMuscleNames())));
        exercise.setSteps(suggestion.exerciseSteps());
        exercise.setCommonMistakes(suggestion.commonMistakes());
        return exercise;
    }

    public ExerciseSearchResult toExerciseSearchResult(Exercise exercise) {
        return new ExerciseSearchResult(exercise.getId(), exercise.getName(), exercise.getVideoUrl(), exercise.getTrainedMuscles().stream().map(Muscle::getName).toList());
    }

}
