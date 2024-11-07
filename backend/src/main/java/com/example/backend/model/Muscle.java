package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import java.util.Set;

@Entity
@Table(name = "muscle")
@Data
public class Muscle {
    @Id
    private long id;
    private String name;

    @ManyToMany(mappedBy = "trainedMuscles")
    private Set<Machine> machines;

    @ManyToMany(mappedBy = "trainedMuscles")
    private Set<Exercise> exercises;
}
