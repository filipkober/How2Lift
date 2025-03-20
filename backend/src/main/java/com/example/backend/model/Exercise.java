package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;
import java.util.Set;

@Data
@Table(name = "exercise")
@Entity
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    private String name;
    private String description;
    private String videoUrl;

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
    private Machine machine;

    @ManyToMany
    @JoinTable(
            name = "exercise_muscle",
            joinColumns = @JoinColumn(name = "exercise_id"),
            inverseJoinColumns = @JoinColumn(name = "muscle_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"exercise_id", "muscle_id"})
    )
    private List<Muscle> trainedMuscles;
}
