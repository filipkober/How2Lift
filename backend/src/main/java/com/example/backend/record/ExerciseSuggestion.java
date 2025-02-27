package com.example.backend.record;

import java.util.List;

public record ExerciseSuggestion(String name, String description, List<String> trainedMuscleNames, String machineName, String exerciseSteps, String commonMistakes) {
}
