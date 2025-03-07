package com.example.backend.record;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;

import java.util.List;

public record SearchResults(List<Muscle> muscles, List<Machine> machines, List<Exercise> exercises) {
}
