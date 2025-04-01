package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "muscle")
@Getter
@Setter
public class Muscle {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String name;

    @ManyToMany(mappedBy = "trainedMuscles")
    @JsonIgnore
    private Set<Machine> machines;

    @ManyToMany(mappedBy = "trainedMuscles")
    @JsonIgnore
    private Set<Exercise> exercises;
}
