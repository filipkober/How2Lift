package com.example.backend.controller;

import com.example.backend.model.Muscle;
import com.example.backend.service.MuscleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.ui.Model;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class MuscleControllerTest {

//    @Mock
//    private MuscleService muscleService;
//
//    @Mock
//    private Model model;
//
//    @InjectMocks
//    private MuscleController muscleController;
//
//    private MockMvc mockMvc;
//    private List<Muscle> muscles;
//    private String uploadPassword = "test-password";
//
//    @BeforeEach
//    void setUp() {
//        mockMvc = MockMvcBuilders.standaloneSetup(muscleController).build();
//        ReflectionTestUtils.setField(muscleController, "uploadPassword", uploadPassword);
//
//        Muscle biceps = new Muscle();
//        biceps.setId(1L);
//        biceps.setName("Biceps");
//
//        Muscle triceps = new Muscle();
//        triceps.setId(2L);
//        triceps.setName("Triceps");
//
//        muscles = Arrays.asList(biceps, triceps);
//    }
//
//    @Test
//    void viewMuscleUploadForm_ReturnsMuscleFormView() throws Exception {
//        // Arrange
//        when(muscleService.getAllMuscles()).thenReturn(muscles);
//
//        // Act & Assert
//        mockMvc.perform(get("/forms/muscles"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("muscleForm"))
//                .andExpect(model().attributeExists("muscles"));
//
//        verify(muscleService, times(1)).getAllMuscles();
//    }
//
//    @Test
//    void handleMuscleUpload_WithCorrectPassword_CreatesMuscle() throws Exception {
//        // Act & Assert
//        mockMvc.perform(post("/forms/muscles")
//                .param("name", "Deltoids")
//                .param("password", uploadPassword)
//                .contentType(MediaType.APPLICATION_FORM_URLENCODED))
//                .andExpect(status().is3xxRedirection())
//                .andExpect(redirectedUrl("/forms/muscles"));
//
//        verify(muscleService, times(1)).createMuscle("Deltoids");
//    }
//
//    @Test
//    void handleMuscleUpload_WithIncorrectPassword_DoesNotCreateMuscle() throws Exception {
//        // Act & Assert
//        mockMvc.perform(post("/forms/muscles")
//                .param("name", "Deltoids")
//                .param("password", "wrong-password")
//                .contentType(MediaType.APPLICATION_FORM_URLENCODED))
//                .andExpect(status().is3xxRedirection())
//                .andExpect(redirectedUrl("/forms/muscles"));
//
//        verify(muscleService, never()).createMuscle(anyString());
//    }
//
//    @Test
//    void getMuscles_ReturnsAllMuscles() throws Exception {
//        // Arrange
//        when(muscleService.getAllMuscles()).thenReturn(muscles);
//
//        // Act & Assert
//        mockMvc.perform(get("/muscles")
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].name").value("Biceps"))
//                .andExpect(jsonPath("$[1].name").value("Triceps"));
//
//        verify(muscleService, times(1)).getAllMuscles();
//    }
}
