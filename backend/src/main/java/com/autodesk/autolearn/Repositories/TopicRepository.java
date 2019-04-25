package com.autodesk.autolearn.Repositories;
import com.autodesk.autolearn.models.Topic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface TopicRepository extends CrudRepository<Topic, Long> { }
