package com.example.backend.repo;

import com.example.backend.model.Muscle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MuscleRepo extends JpaRepository<Muscle, Long> {

    List<Muscle> findByNameIn(List<String> names);

    @Query("SELECT DISTINCT m.name FROM Muscle m")
    List<String> findDistinctNames();

    List<Muscle> findByNameContaining(String query);
}
