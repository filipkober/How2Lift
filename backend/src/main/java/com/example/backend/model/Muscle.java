package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;

@Entity
@Table(name = "muscle")
@Data
public class Muscle {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String name;

    @ManyToMany(mappedBy = "trainedMuscles")
    private Set<Machine> machines;

    @ManyToMany(mappedBy = "trainedMuscles")
    private Set<Exercise> exercises;
}
