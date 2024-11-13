package com.example.backend.repo;

import com.example.backend.model.Machine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MachineRepo extends JpaRepository<Machine, Long> {
}
