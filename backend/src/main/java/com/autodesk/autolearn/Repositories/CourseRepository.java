package com.autodesk.autolearn.Repositories;

import com.autodesk.autolearn.models.Course;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<Course, Long> { }
