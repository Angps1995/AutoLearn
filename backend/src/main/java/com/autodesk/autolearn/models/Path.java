package com.autodesk.autolearn.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Path {
    @Id
    private String id;
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "course_path",
            joinColumns = @JoinColumn(name = "course_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "path_id",
                    referencedColumnName = "id"))
    private List<Course> courses;

    private String description;
    private int votes;

    @ManyToOne
    @JoinColumn(name="topic_id")
    private Topic topic;
}
