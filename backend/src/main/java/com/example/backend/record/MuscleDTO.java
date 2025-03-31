package com.example.backend.record;

import java.util.Set;

public record MuscleDTO(
        long id,
        String name,
        Set<Long> machineIds,
        Set<Long> exerciseIds
) {}
