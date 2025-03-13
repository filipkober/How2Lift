package com.example.backend.record;

import java.util.List;

public record ExerciseSearchResult(long id, String name, String videoUrl, List<String> muscleNames) {
}
