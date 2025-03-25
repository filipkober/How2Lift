package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@Table(name = "machine")
@Entity
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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
            inverseJoinColumns = @JoinColumn(name = "muscle_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"machine_id", "muscle_id"})
    )
    private List<Muscle> trainedMuscles;
}
