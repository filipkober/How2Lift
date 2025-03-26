package com.example.backend.service;

import com.example.backend.record.MachineDTO;
import com.example.backend.mapper.MachineMapper;
import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.MachineSuggestion;
import com.example.backend.repo.MachineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
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

//    public List<MachineDTO> getAllMachinesDTO() {
//        return repo.findAll().stream().map(mapper::toMachineDTO).toList();
//    }

    public Machine getMachineById(Long id) {
        return repo.findById(id).orElse(null);
    }

//    public MachineDTO getMachineDTOById(Long id) {
//        return mapper.toMachineDTO(Objects.requireNonNull(repo.findById(id).orElse(null)));
//    }

    public Machine getMachineByName(String name) {
        return repo.findByName(name);
    }

//    public MachineDTO getMachineDTOByName(String name) {
//        return mapper.toMachineDTO(repo.findByName(name));
//    }

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

    public List<MachineDTO> getMachinesDTOByNames(List<String> names) {
        return repo.findDistinctByNameIn(names).stream().map(mapper::toMachineDTO).toList();
    }

    public List<MachineDTO> getMachinesFromSuggestions(List<MachineSuggestion> suggestions) {
        return suggestions.stream().map(
                suggestion -> {
                    Machine machine = mapper.toMachine(suggestion);
                    return mapper.toMachineDTO(machine);
                }
        ).toList();
    }

    public List<MachineDTO> searchMachines(String query) {

        Set<Machine> machineSet = new HashSet<>();
        machineSet.addAll(repo.findByNameContaining(query));
        machineSet.addAll(repo.findByDescriptionContaining(query));

        return List.copyOf(machineSet).stream().map(mapper::toMachineDTO).toList();
    }
}
