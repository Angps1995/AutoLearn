package com.autodesk.autolearn.models;

import lombok.Data;
import javax.persistence.Id;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Course {
    @Id
    private String id;
    private String name;
    private int votes;
    private String link;
    private String description;
    private String difficulty;
    private String[] tags;

    @ManyToOne
    @JoinColumn(name="topic_id")
    private Topic topic;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "path_course",
            joinColumns = @JoinColumn(name = "path_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id",
                    referencedColumnName = "id"))
    private List<Path> paths;
}
