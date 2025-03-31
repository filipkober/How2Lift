package com.example.backend.controller;

import com.example.backend.model.Exercise;
import com.example.backend.model.Machine;
import com.example.backend.model.Muscle;
import com.example.backend.service.ExerciseService;
import com.example.backend.service.MachineService;
import com.example.backend.service.MuscleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class MachineControllerTest {
//
//    @Mock
//    private MachineService machineService;
//
//    @Mock
//    private MuscleService muscleService;
//
//    @Mock
//    private ExerciseService exerciseService;
//
//    @InjectMocks
//    private MachineController machineController;
//
//    private MockMvc mockMvc;
//    private List<Muscle> muscles;
//    private List<Machine> machines;
//    private String uploadPassword = "test-password";
//
//    @BeforeEach
//    void setUp() {
//        mockMvc = MockMvcBuilders.standaloneSetup(machineController).build();
//    }
}
