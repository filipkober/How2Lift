package com.example.backend.mapper;

import com.example.backend.model.Exercise;
import com.example.backend.model.Muscle;
import com.example.backend.record.ExerciseDTO;
import com.example.backend.record.ExerciseSearchResult;
import com.example.backend.record.ExerciseSuggestion;
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
        exercise.setTrainedMuscles(muscleService.getMusclesByNames(suggestion.trainedMuscleNames()));
        exercise.setSteps(suggestion.exerciseSteps());
        exercise.setCommonMistakes(suggestion.commonMistakes());
        exercise.setRepType(suggestion.repType());
        return exercise;
    }

    public ExerciseSearchResult toExerciseSearchResult(Exercise exercise) {
        return new ExerciseSearchResult(exercise.getId(), exercise.getName(), exercise.getVideoUrl(), exercise.getTrainedMuscles().stream().map(Muscle::getName).toList());
    }

    public ExerciseDTO toExerciseDTO(Exercise exercise) {

        HashSet<Long> muscleIds = new HashSet<>();
        var muscles = exercise.getTrainedMuscles();
        System.out.println(muscles);
        if (muscles != null) {
            for (Muscle muscle : muscles) {
                muscleIds.add(muscle.getId());
            }
        }

        return new ExerciseDTO(
                exercise.getId(),
                exercise.getName(),
                exercise.getDescription(),
                exercise.getVideoUrl(),
                exercise.getRepType(),
                exercise.getSteps(),
                exercise.getCommonMistakes(),
                exercise.getMachine().getId(),
                muscleIds
        );
    }
}
