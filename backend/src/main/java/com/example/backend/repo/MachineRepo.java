package com.example.backend.repo;

import com.example.backend.model.Machine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;
import java.util.List;

@RepositoryRestResource
public interface MachineRepo extends JpaRepository<Machine, Long> {
    @Query("SELECT DISTINCT m.name FROM Machine m")
    List<String> findDistinctNames();

    List<Machine> findDistinctByNameIn(Collection<String> names);

    Machine findByName(String name);

    List<Machine> findByNameContaining(String query);

    List<Machine> findByDescriptionContaining(String query);
}
