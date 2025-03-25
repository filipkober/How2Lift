package com.example.backend.service;

import com.example.backend.mapper.ExerciseMapper;
import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.ExerciseSuggestion;
import com.example.backend.repo.ExerciseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ExerciseService {

    private final ExerciseRepo repo;
    private final ExerciseMapper mapper;

    @Autowired
    public ExerciseService(ExerciseRepo repo, ExerciseMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<Exercise> getAllExercises() {
        return repo.findAll();
    }

    public List<Exercise> getExercises(List<String> exerciseNames) {
        return repo.findByNameIn(exerciseNames);
    }

    public Exercise createExercise(String name, String description, List<String> steps, List<String> commonMistakes, String videoUrl, Set<Muscle> trainedMuscles, Machine machine) {
        Exercise exercise = new Exercise();
        exercise.setName(name);
        exercise.setDescription(description);
        exercise.setTrainedMuscles(trainedMuscles.stream().toList());
        exercise.setMachine(machine);
        exercise.setSteps(steps);
        exercise.setCommonMistakes(commonMistakes);
        exercise.setVideoUrl(videoUrl);

        return repo.save(exercise);
    }

    public List<Exercise> getExercisesFromSuggestions(List<ExerciseSuggestion> suggestions) {
        return suggestions.stream().map(mapper::toExercise).toList();
    }

    public Object getAllExerciseNames() {
        return repo.findDistinctNames();
    }

    public List<Exercise> searchExercises(String query) {

        Set<Exercise> exerciseSet = new HashSet<>();
        exerciseSet.addAll(repo.findByNameContaining(query));
        exerciseSet.addAll(repo.findByDescriptionContaining(query));

        return List.copyOf(exerciseSet);
    }

    public Exercise getExerciseById(Long id) {
        return repo.findById(id).orElse(null);
    }
}
