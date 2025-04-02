package com.example.backend.record;

import com.example.backend.model.RepType;

import java.util.List;
import java.util.Set;

public record ExerciseDTO(
        long id,
        String name,
        String description,
        String videoUrl,
        RepType repType,
        List<String> steps,
        List<String> commonMistakes,
        Long machineId,
        Set<Long> trainedMuscleIds
) {
}
