package com.autodesk.autolearn.Repositories;
import com.autodesk.autolearn.models.Topic;
import org.springframework.data.repository.CrudRepository;

public interface TopicRepository extends CrudRepository<Topic, Long> { }
