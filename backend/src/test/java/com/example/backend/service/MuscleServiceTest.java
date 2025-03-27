package com.example.backend.service;

import com.example.backend.model.Muscle;
import com.example.backend.repo.MuscleRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class MuscleServiceTest {

    @Mock
    private MuscleRepo muscleRepo;

    @InjectMocks
    private MuscleService muscleService;

    private Muscle biceps;
    private Muscle triceps;

    @BeforeEach
    void setup() {
        biceps = new Muscle();
        biceps.setId(1L);
        biceps.setName("Biceps");

        triceps = new Muscle();
        triceps.setId(2L);
        triceps.setName("Triceps");
    }

    @Test
    void getAllMuscles_ReturnsAllMuscles() {
        // Arrange
        List<Muscle> muscles = Arrays.asList(biceps, triceps);
        when(muscleRepo.findAll()).thenReturn(muscles);

        // Act
        List<Muscle> result = muscleService.getAllMuscles();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Biceps", result.get(0).getName());
        assertEquals("Triceps", result.get(1).getName());
        verify(muscleRepo, times(1)).findAll();
    }

    @Test
    void createMuscle_SavesMuscle() {
        // Arrange
        String muscleName = "Deltoids";
        
        // Act
        muscleService.createMuscle(muscleName);
        
        // Assert
        verify(muscleRepo, times(1)).save(any(Muscle.class));
    }

    @Test
    void getMusclesByNames_ReturnsMusclesWithMatchingNames() {
        // Arrange
        List<String> muscleNames = Arrays.asList("Biceps", "Triceps");
        Set<Muscle> muscles = new HashSet<>();
        muscles.add(biceps);
        muscles.add(triceps);
        when(muscleRepo.findByNameIn(muscleNames)).thenReturn(muscles);

        // Act
        List<Muscle> result = muscleService.getMusclesByNames(muscleNames).stream().toList();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Biceps", result.get(0).getName());
        assertEquals("Triceps", result.get(1).getName());
        verify(muscleRepo, times(1)).findByNameIn(muscleNames);
    }

    @Test
    void getMusclesByIds_ReturnsMusclesWithMatchingIds() {
        // Arrange
        List<Long> muscleIds = Arrays.asList(1L, 2L);
        List<Muscle> muscles = Arrays.asList(biceps, triceps);
        when(muscleRepo.findAllById(muscleIds)).thenReturn(muscles);

        // Act
        List<Muscle> result = muscleService.getMusclesByIds(muscleIds);

        // Assert
        assertEquals(2, result.size());
        assertEquals("Biceps", result.get(0).getName());
        assertEquals("Triceps", result.get(1).getName());
        verify(muscleRepo, times(1)).findAllById(muscleIds);
    }

    @Test
    void getAllMuscleNames_ReturnsDistinctNames() {
        // Arrange
        List<String> muscleNames = Arrays.asList("Biceps", "Triceps");
        when(muscleRepo.findDistinctNames()).thenReturn(muscleNames);

        // Act
        List<String> result = muscleService.getAllMuscleNames();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Biceps", result.get(0));
        assertEquals("Triceps", result.get(1));
        verify(muscleRepo, times(1)).findDistinctNames();
    }
}
