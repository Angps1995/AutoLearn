package models;
import lombok.Data;

@Data
public class Path {
    private String id;
    private String name;
    private List<Course> courses;
    private String description;
    private int votes;
    private Topic topic;
}
