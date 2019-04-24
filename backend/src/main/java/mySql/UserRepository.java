package mySql;

import org.springframework.data.repository.CrudRepository;
import mySql.User;

/**
 * Repository interface, will be automatically implemented by Spring in a bean with the
 * same name with changing case.
 * Bean name will be userRepository
 *
* */

public interface UserRepository extends CrudRepository<User, Integer>{
}
