package com.autodesk.autolearn.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.util.List;

@Data
@Entity
public class Path {
    private String id;
    private String name;
    private List<Course> courses;
    private String description;
    private int votes;

    @ManyToOne
    private Topic topic;
}
