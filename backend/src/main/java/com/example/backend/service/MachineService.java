package com.example.backend.service;

import com.example.backend.mapper.MachineMapper;
import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.MachineSuggestion;
import com.example.backend.repo.MachineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MachineService {

    private final MachineRepo repo;
    private final MachineMapper mapper;

    @Autowired
    public MachineService(MachineRepo repo, MachineMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<Machine> getAllMachines() {
        return repo.findAll();
    }

    public Machine getMachineById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Machine getMachineByName(String name) {
        return repo.findByName(name);
    }

    public void createMachine(String name, String description, String imageUrl, Set<Muscle> trainedMuscles, Set<Exercise> exercises) {
        Machine machine = new Machine();
        machine.setName(name);
        machine.setDescription(description);
        machine.setImageUrl(imageUrl);
        machine.setTrainedMuscles(trainedMuscles);
        machine.setExercises(exercises);

        repo.save(machine);
    }

    public List<String> getAllMachineNames() {
        return repo.findDistinctNames();
    }

    public List<Machine> getMachinesByNames(List<String> names) {
        return repo.findDistinctByNameIn(names);
    }

    public List<Machine> getMachinesFromSuggestions(List<MachineSuggestion> suggestions) {
        return suggestions.stream().map(mapper::toMachine).toList();
    }
}
