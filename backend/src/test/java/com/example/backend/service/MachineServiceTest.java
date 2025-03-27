package com.example.backend.service;

import com.example.backend.record.MachineDTO;
import com.example.backend.mapper.MachineMapper;
import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.record.MachineSuggestion;
import com.example.backend.repo.MachineRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class MachineServiceTest {

    @Mock
    private MachineRepo machineRepo;

    @Mock
    private MachineMapper machineMapper;

    @InjectMocks
    private MachineService machineService;

    private Machine legPress;
    private Machine benchPress;
    private Muscle quadriceps;
    private Exercise squats;

    @BeforeEach
    void setup() {
        legPress = new Machine();
        legPress.setId(1L);
        legPress.setName("Leg Press");
        legPress.setDescription("Machine for leg exercises");
        
        benchPress = new Machine();
        benchPress.setId(2L);
        benchPress.setName("Bench Press");
        benchPress.setDescription("Bench for chest exercises");

        quadriceps = new Muscle();
        quadriceps.setId(1L);
        quadriceps.setName("Quadriceps");

        squats = new Exercise();
        squats.setId(1L);
        squats.setName("Squats");
    }

    @Test
    void getAllMachines_ReturnsAllMachines() {
        // Arrange
        List<Machine> machines = Arrays.asList(legPress, benchPress);
        when(machineRepo.findAll()).thenReturn(machines);

        // Act
        List<Machine> result = machineService.getAllMachines();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Leg Press", result.get(0).getName());
        assertEquals("Bench Press", result.get(1).getName());
        verify(machineRepo, times(1)).findAll();
    }

    @Test
    void getMachineById_ReturnsMachine() {
        // Arrange
        when(machineRepo.findById(1L)).thenReturn(Optional.of(legPress));

        // Act
        Machine result = machineService.getMachineById(1L);

        // Assert
        assertEquals("Leg Press", result.getName());
        verify(machineRepo, times(1)).findById(1L);
    }

    @Test
    void getMachineByName_ReturnsMachine() {
        // Arrange
        when(machineRepo.findByName("Leg Press")).thenReturn(legPress);

        // Act
        Machine result = machineService.getMachineByName("Leg Press");

        // Assert
        assertEquals("Leg Press", result.getName());
        verify(machineRepo, times(1)).findByName("Leg Press");
    }

    @Test
    void createMachine_SavesMachine() {
        // Arrange
        String name = "Smith Machine";
        String description = "Multi-exercise machine";
        String imageUrl = "smith.jpg";
        Set<Muscle> muscles = new HashSet<>(Collections.singletonList(quadriceps));
        Set<Exercise> exercises = new HashSet<>(Collections.singletonList(squats));
        
        // Act
        machineService.createMachine(name, description, imageUrl, muscles, exercises);
        
        // Assert
        verify(machineRepo, times(1)).save(any(Machine.class));
    }

    @Test
    void getAllMachineNames_ReturnsDistinctNames() {
        // Arrange
        List<String> machineNames = Arrays.asList("Leg Press", "Bench Press");
        when(machineRepo.findDistinctNames()).thenReturn(machineNames);

        // Act
        List<String> result = machineService.getAllMachineNames();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Leg Press", result.get(0));
        assertEquals("Bench Press", result.get(1));
        verify(machineRepo, times(1)).findDistinctNames();
    }

    @Test
    void getMachinesByNames_ReturnsMachinesWithMatchingNames() {
        // Arrange
        List<String> machineNames = Arrays.asList("Leg Press", "Bench Press");
        List<Machine> machines = Arrays.asList(legPress, benchPress);
        when(machineRepo.findDistinctByNameIn(machineNames)).thenReturn(machines);

        // Act
        List<Machine> result = machineService.getMachinesByNames(machineNames);

        // Assert
        assertEquals(2, result.size());
        assertEquals("Leg Press", result.get(0).getName());
        assertEquals("Bench Press", result.get(1).getName());
        verify(machineRepo, times(1)).findDistinctByNameIn(machineNames);
    }

    @Test
    void getMachinesFromSuggestions_ReturnsMachines() {
        // Arrange
        MachineSuggestion suggestion = new MachineSuggestion(
            "Cable Machine", 
            "Versatile machine with adjustable cables", 
            Arrays.asList("Biceps", "Triceps")
        );
        List<MachineSuggestion> suggestions = Collections.singletonList(suggestion);
        
        Machine cableMachine = new Machine();
        cableMachine.setName("Cable Machine");
        
        when(machineMapper.toMachine(suggestion)).thenReturn(cableMachine);

        // Act
        List<MachineDTO> result = machineService.getMachinesFromSuggestions(suggestions);

        // Assert
        assertEquals(1, result.size());
        assertEquals("Cable Machine", result.getFirst().name());
        verify(machineMapper, times(1)).toMachine(suggestion);
    }
}
