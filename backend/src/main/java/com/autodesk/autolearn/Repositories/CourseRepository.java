package com.autodesk.autolearn.Repositories;

import com.autodesk.autolearn.models.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CourseRepository extends CrudRepository<Course, Long> { }
