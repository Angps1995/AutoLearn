package com.autodesk.autolearn.Repositories;
import com.autodesk.autolearn.models.Path;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface PathRepository extends CrudRepository<Path, Long> { }