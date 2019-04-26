package com.autodesk.autolearn.models;

import lombok.Data;

import javax.persistence.Id;

import javax.persistence.*;

@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int votes;
    private String link;

    @Column(length = 511)
    private String description;
    private String difficulty;
    private String tags;
    private String imageLink;

    @Column(name="topic")
    private String topicLink;

    @ManyToOne
    @JoinColumn(name="topic_id")
    private Topic topic;

    @ManyToOne
    @JoinColumn(name="path_id")
    private Path path;
}
