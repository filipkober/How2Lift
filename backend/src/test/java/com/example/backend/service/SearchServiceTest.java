package com.example.backend.service;

import com.example.backend.mapper.ExerciseMapper;
import com.example.backend.mapper.MachineMapper;
import com.example.backend.mapper.MuscleMapper;
import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class SearchServiceTest {

//    @Mock
//    private MuscleService muscleService;
//
//    @Mock
//    private ExerciseService exerciseService;
//
//    @Mock
//    private MachineService machineService;
//
//    @InjectMocks
//    private ExerciseMapper exerciseMapper;
//
//    @InjectMocks
//    private MuscleMapper muscleMapper;
//
//    @InjectMocks
//    private MachineMapper machineMapper;
//
//    @InjectMocks
//    private SearchService searchService;
//
//    private List<Muscle> muscles;
//    private List<Exercise> exercises;
//    private List<Machine> machines;
//
//    @BeforeEach
//    public void setUp() {
//        var biceps = new Muscle();
//        biceps.setId(1L);
//        biceps.setName("Biceps");
//
//        var triceps = new Muscle();
//        triceps.setId(2L);
//        triceps.setName("Triceps");
//
//        muscles = List.of(biceps, triceps);
//
//        var pushUps = new Exercise();
//        pushUps.setId(1L);
//        pushUps.setName("Push Ups");
//
//        var pullUps = new Exercise();
//        pullUps.setId(2L);
//        pullUps.setName("Pull Ups");
//
//        exercises = List.of(pushUps, pullUps);
//
//        var benchPress = new Machine();
//        benchPress.setId(1L);
//        benchPress.setName("Bench Press");
//
//        var legPress = new Machine();
//        legPress.setId(2L);
//        legPress.setName("Leg Press");
//
//        machines = List.of(benchPress, legPress);
//    }
//
//    @Test
//    public void searchMuscles_ReturnsAllAdequateMuscles() {
//
//        // Arrange
//
//        when(muscleService.searchMuscles("ceps")).thenReturn(muscles.stream().map(
//                muscle -> muscleMapper.toMuscleDTO(muscle)
//        ).toList());
//        when(muscleService.searchMuscles("Biceps")).thenReturn(muscles.subList(0, 1)
//        .stream().map(muscle -> muscleMapper.toMuscleDTO(muscle)).toList());
//
//        String query1 = "ceps";
//        String query2 = "Biceps";
//
//        // Act
//
//        var result1 = searchService.searchMuscles(query1);
//        var result2 = searchService.searchMuscles(query2);
//
//        System.out.println(result1);
//        System.out.println(result2);
//
//        // Assert
//
//        assertEquals(2, result1.size());
//        assertEquals("Biceps", result1.get(0).name());
//        assertEquals("Triceps", result1.get(1).name());
//        assertEquals(1, result2.size());
//        assertEquals("Biceps", result2.getFirst().name());
//    }
//
//    @Test
//    public void searchExercises_ReturnsAllAdequateExercises() {
//
//        // Arrange
//
//        when(exerciseService.searchExercises("Ups")).thenReturn(exercises.stream().map(
//                exercise -> exerciseMapper.toExerciseDTO(exercise)
//        ).toList());
//        when(exerciseService.searchExercises("Pull")).thenReturn(exercises.subList(1, 2).stream().map(
//                exercise -> exerciseMapper.toExerciseDTO(exercise)
//        ).toList());
//
//        String query1 = "Ups";
//        String query2 = "Pull";
//
//        // Act
//
//        var result1 = searchService.searchExercises(query1);
//        var result2 = searchService.searchExercises(query2);
//
//        // Assert
//
//        assertEquals(2, result1.size());
//        assertEquals("Push Ups", result1.get(0).name());
//        assertEquals("Pull Ups", result1.get(1).name());
//        assertEquals(1, result2.size());
//        assertEquals("Pull Ups", result2.getFirst().name());
//    }
//
//    @Test
//    public void searchMachines_ReturnsAllAdequateMachines() {
//
//        // Arrange
//
//        when(machineService.searchMachines("Press")).thenReturn(machines.stream().map(
//                machine -> machineMapper.toMachineDTO(machine)
//        ).toList());
//        when(machineService.searchMachines("Leg")).thenReturn(machines.subList(1, 2)
//        .stream().map(machine -> machineMapper.toMachineDTO(machine)).toList());
//
//        String query1 = "Press";
//        String query2 = "Leg";
//
//        // Act
//
//        var result1 = searchService.searchMachines(query1);
//        var result2 = searchService.searchMachines(query2);
//
//        // Assert
//
//        assertEquals(2, result1.size());
//        assertEquals("Bench Press", result1.get(0).name());
//        assertEquals("Leg Press", result1.get(1).name());
//        assertEquals(1, result2.size());
//        assertEquals("Leg Press", result2.getFirst().name());
//    }
}
