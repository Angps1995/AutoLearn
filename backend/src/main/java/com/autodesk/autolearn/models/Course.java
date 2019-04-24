package com.autodesk.autolearn.models;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Course {
    private String id;
    private String name;
    private int votes;
    private String link;
    private String description;
    private String difficulty;
    private String[] tags;
    private Topic topic;
}
