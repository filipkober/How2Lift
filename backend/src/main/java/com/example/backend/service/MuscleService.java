package com.example.backend.service;

import com.example.backend.record.MuscleDTO;
import com.example.backend.mapper.MuscleMapper;
import com.example.backend.model.Muscle;
import com.example.backend.repo.MuscleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MuscleService {

    private final MuscleRepo repo;
    private final MuscleMapper mapper;

    @Autowired
    public MuscleService(MuscleRepo repo, MuscleMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<Muscle> getAllMuscles(){
        return repo.findAll();
    }

    public List<MuscleDTO> getAllMusclesDTO() {
        return repo.findAll().stream().map(mapper::toMuscleDTO).toList();
    }

    public void createMuscle(String name){
        Muscle muscle = new Muscle();
        muscle.setName(name);

        repo.save(muscle);
    }

    public Set<Muscle> getMusclesByNames(List<String> muscleNames){
        return repo.findByNameIn(muscleNames);
    }
    public List<Muscle> getMusclesByIds(List<Long> muscleIds) {
        return repo.findAllById(muscleIds);
    }

    public List<String> getAllMuscleNames() {
        return repo.findDistinctNames();
    }

    public List<MuscleDTO> searchMuscles(String query) {
        return repo.findByNameContaining(query).stream().map(mapper::toMuscleDTO).toList();
    }
}
