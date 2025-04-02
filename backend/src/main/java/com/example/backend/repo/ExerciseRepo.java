package com.example.backend.repo;

import com.example.backend.model.Exercise;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ExerciseRepo extends JpaRepository<Exercise, Long> {

    List<Exercise> findByNameIn(List<String> names);

    @Query("SELECT DISTINCT e.name FROM Exercise e")
    List<String> findDistinctNames();

    List<Exercise> findByNameContaining(String query);

    List<Exercise> findByDescriptionContaining(String query);
}
