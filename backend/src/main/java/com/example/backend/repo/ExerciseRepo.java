package com.example.backend.repo;

import com.example.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ExerciseRepo extends JpaRepository<Exercise, Long> {
}
