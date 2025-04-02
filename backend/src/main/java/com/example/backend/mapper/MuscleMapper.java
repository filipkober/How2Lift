package com.example.backend.mapper;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.record.MuscleDTO;
import com.example.backend.model.Muscle;
import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class MuscleMapper {

//    public Muscle toMuscle(String name) {
//        var muscle = new Muscle();
//        muscle.setName(name);
//        return muscle;
//    }

    public MuscleDTO toMuscleDTO(Muscle muscle) {

        var machineIds = new HashSet<Long>();
        var machines = muscle.getMachines();
        if(machines != null) {
            for (Machine machine : machines) {
                machineIds.add(machine.getId());
            }
        }
        var exerciseIds = new HashSet<Long>();
        var exercises = muscle.getExercises();
        if(exercises != null) {
            for (Exercise exercise : exercises) {
                exerciseIds.add(exercise.getId());
            }
        }

        return new MuscleDTO(
                muscle.getId(),
                muscle.getName(),
                machineIds,
                exerciseIds
        );
    }

}
