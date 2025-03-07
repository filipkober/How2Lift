package com.example.backend.controller;

import com.example.backend.record.SearchResults;
import com.example.backend.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public ResponseEntity<SearchResults> search(@RequestParam(name = "query", required = true) String query) {

        if(query.length() < 3) {
            return ResponseEntity.badRequest().body(new SearchResults(new ArrayList<>(0), new ArrayList<>(0), new ArrayList<>(0)));
        }

        var muscles = searchService.searchMuscles(query);
        var exercises = searchService.searchExercises(query);
        var machines = searchService.searchMachines(query);

        return ResponseEntity.ok(new SearchResults(muscles, machines, exercises));
    }

}
