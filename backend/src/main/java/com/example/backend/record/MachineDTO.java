package com.example.backend.record;

import java.util.Set;

public record MachineDTO(
        long id,
        String name,
        String description,
        String imageUrl,
        Set<Long> exerciseIds,
        Set<Long> trainedMuscleIds
) {}