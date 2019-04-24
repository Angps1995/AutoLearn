package com.autodesk.autolearn.models;

import lombok.Data;

import javax.persistence.*;

import java.util.List;

@Data
@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;

    @OneToMany(mappedBy = "topic")
    private List<Course> courses;
    @OneToMany(mappedBy = "topic")
    private List<Path> paths;
}