package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
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
    @JsonIgnore
    private List<Machine> machines;

    @ManyToMany(mappedBy = "trainedMuscles")
    @JsonIgnore
    private List<Exercise> exercises;
}
