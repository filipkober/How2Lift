package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Table(name = "exercise")
@Entity
@Getter
@Setter
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    private String name;
    private String description;
    private String videoUrl;
    private RepType repType;

    @ElementCollection
    @CollectionTable(name = "exercise_steps", joinColumns = @JoinColumn(name = "exercise_id"))
    @Column(name = "step")
    private List<String> steps;

    @ElementCollection
    @CollectionTable(name = "exercise_common_mistakes", joinColumns = @JoinColumn(name = "exercise_id"))
    @Column(name = "mistake")
    private List<String> commonMistakes;

    @ManyToOne
    @JoinColumn(name = "machine_id")
    @JsonIgnore
    private Machine machine;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "exercise_muscle",
            joinColumns = @JoinColumn(name = "exercise_id"),
            inverseJoinColumns = @JoinColumn(name = "muscle_id")
    )
    private Set<Muscle> trainedMuscles;
}
