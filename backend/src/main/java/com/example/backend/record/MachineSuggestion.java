package com.example.backend.record;

import java.util.List;

public record MachineSuggestion(String name, String description, List<String> trainedMuscleNames) {
}
