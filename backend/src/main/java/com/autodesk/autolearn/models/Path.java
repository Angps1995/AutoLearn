package com.autodesk.autolearn.models;

import lombok.Data;
import javax.persistence.Id;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Path {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(mappedBy = "path")
    private List<Course> courses;

    private String courses_links;

    private String description;
    private int votes;

    @ManyToOne
    @JoinColumn(name="topic_id")
    private Topic topic;
}
