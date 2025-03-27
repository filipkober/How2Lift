package com.example.backend.controller;

import com.example.backend.mapper.MuscleMapper;
import com.example.backend.model.Muscle;
import com.example.backend.service.SearchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SearchControllerTest {

    @Mock
    private SearchService searchService;

    @InjectMocks
    private SearchController searchController;
    @InjectMocks
    private MuscleMapper muscleMapper;

    private MockMvc mockMvc;

    private List<Muscle> muscles;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(searchController).build();

        var biceps = new Muscle();
        biceps.setId(1L);
        biceps.setName("Biceps");

        var triceps = new Muscle();
        triceps.setId(2L);
        triceps.setName("Triceps");

        muscles = List.of(biceps, triceps);
    }

    @Test
    void search_ReturnsSearchResults() throws Exception {
        // Arrange

        when(searchService.searchMuscles("biceps")).thenReturn(muscles.stream().map(muscleMapper::toMuscleDTO).toList());
        when(searchService.searchExercises("biceps")).thenReturn(List.of());
        when(searchService.searchMachines("biceps")).thenReturn(List.of());

        var query = "biceps";

        // Act and Assert

        mockMvc.perform(get("/search")
            .param("query", query))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.muscles[0].name").value("Biceps"));
    }

    @Test
    void search_QueryNeedsToBeAtLeast3CharactersLong() throws Exception {
        // Arrange

        var query = "ab";

        // Act and Assert

        mockMvc.perform(get("/search")
            .param("query", query))
            .andExpect(status().isBadRequest());
    }

}
