package com.example.backend.repo;

import com.example.backend.model.Muscle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MuscleRepo extends JpaRepository<Muscle, Long> {
}
