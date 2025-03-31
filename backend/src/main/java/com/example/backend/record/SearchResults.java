package com.example.backend.record;

import java.util.List;

public record SearchResults(List<MuscleDTO> muscles, List<MachineDTO> machines, List<ExerciseDTO> exercises) {
}
