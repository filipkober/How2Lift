package com.example.backend.service;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.repo.MachineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MachineService {

    private final MachineRepo repo;

    @Autowired
    public MachineService(MachineRepo repo) {
        this.repo = repo;
    }

    public List<Machine> getAllMachines() {
        return repo.findAll();
    }

    public Machine getMachineById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Machine createMachine(String name, String description, String imageUrl, Set<Muscle> trainedMuscles, Set<Exercise> exercises) {
        Machine machine = new Machine();
        machine.setName(name);
        machine.setDescription(description);
        machine.setImageUrl(imageUrl);
        machine.setTrainedMuscles(trainedMuscles);
        machine.setExercises(exercises);

        return repo.save(machine);
    }
}
