package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Table(name = "machine")
@Entity
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String description;
    private String imageUrl;

    @OneToMany(mappedBy = "machine")
    private Set<Exercise> exercises;

    @ManyToMany
    @JoinTable(
            name = "machine_muscle",
            joinColumns = @JoinColumn(name = "machine_id"),
            inverseJoinColumns = @JoinColumn(name = "muscle_id")
    )
    private Set<Muscle> trainedMuscles;
}
