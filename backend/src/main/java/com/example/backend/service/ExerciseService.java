package com.example.backend.service;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.repo.ExerciseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ExerciseService {

    private final ExerciseRepo repo;

    @Autowired
    public ExerciseService(ExerciseRepo repo) {
        this.repo = repo;
    }

    public List<Exercise> getAllExercises() {
        return repo.findAll();
    }

    public List<Exercise> getExercises(List<String> exerciseNames) {
        return repo.findByNameIn(exerciseNames);
    }

    public Exercise createExercise(String name, String description, String steps, String commonMistakes, String videoUrl, Set<Muscle> trainedMuscles, Machine machine) {
        Exercise exercise = new Exercise();
        exercise.setName(name);
        exercise.setDescription(description);
        exercise.setTrainedMuscles(trainedMuscles);
        exercise.setMachine(machine);
        exercise.setSteps(steps);
        exercise.setCommonMistakes(commonMistakes);
        exercise.setVideoUrl(videoUrl);

        return repo.save(exercise);
    }
}