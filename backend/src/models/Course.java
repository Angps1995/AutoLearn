package models;
import lombok.Data;

@Data
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
