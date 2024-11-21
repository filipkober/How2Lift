package com.example.backend.service;

import com.example.backend.model.Muscle;
import com.example.backend.repo.MuscleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MuscleService {

    private final MuscleRepo repo;

    @Autowired
    public MuscleService(MuscleRepo repo){
        this.repo = repo;
    }

    public List<Muscle> getAllMuscles(){
        return repo.findAll();
    }

    public Muscle createMuscle(String name){
        Muscle muscle = new Muscle();
        muscle.setName(name);

        return repo.save(muscle);
    }

    public List<Muscle> getMusclesByNames(List<String> muscleNames){
        return repo.findByNameIn(muscleNames);
    }
    public List<Muscle> getMusclesByIds(List<Long> muscleIds) {
        return repo.findAllById(muscleIds);
    }
}
