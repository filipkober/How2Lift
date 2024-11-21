package com.example.backend.repo;

import com.example.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ExerciseRepo extends JpaRepository<Exercise, Long> {

    List<Exercise> findByNameIn(List<String> names);

}
