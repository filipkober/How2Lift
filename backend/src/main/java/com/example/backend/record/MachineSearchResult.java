package com.example.backend.record;

import java.util.List;

public record MachineSearchResult(long id, String name, String imageUrl, List<String> muscleNames) {
}
