package com.example.backend.mapper;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.MachineDTO;
import com.example.backend.record.MachineSearchResult;
import com.example.backend.record.MachineSuggestion;
import com.example.backend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class MachineMapper {

    private final MuscleService muscleService;

    @Autowired
    public MachineMapper(MuscleService muscleService) {
        this.muscleService = muscleService;
    }

    public Machine toMachine(MachineSuggestion suggestion) {
        var machine = new Machine();
        machine.setName(suggestion.name());
        machine.setDescription(suggestion.description());
        var trainedMuscles = new HashSet<>(muscleService.getMusclesByNames(suggestion.trainedMuscleNames()));
        machine.setTrainedMuscles(trainedMuscles);
        return machine;
    }

    public MachineSearchResult toMachineSearchResult(Machine machine) {
        return new MachineSearchResult(machine.getId(), machine.getName(), machine.getImageUrl(), machine.getTrainedMuscles().stream().map(Muscle::getName).toList());
    }

    public MachineDTO toMachineDTO(Machine machine) {

        var exerciseIds = new HashSet<Long>();
        var exercises = machine.getExercises();
        if (exercises != null) {
            for (Exercise exercise : exercises) {
                exerciseIds.add(exercise.getId());
            }
        }

        var muscleIds = new HashSet<Long>();
        var muscles = machine.getTrainedMuscles();
        if(muscles != null) {
            for (Muscle muscle : muscles) {
                muscleIds.add(muscle.getId());
            }
        }

        return new MachineDTO(
                machine.getId(),
                machine.getName(),
                machine.getDescription(),
                machine.getImageUrl(),
                exerciseIds,
                muscleIds
        );
    }
}
