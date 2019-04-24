package com.autodesk.autolearn.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Topic {
    @Id
    private String id;
    private String name;

    @OneToMany(mappedBy = "topic")
    private List<Course> courses;
    @OneToMany(mappedBy = "topic")
    private List<Path> paths;
}