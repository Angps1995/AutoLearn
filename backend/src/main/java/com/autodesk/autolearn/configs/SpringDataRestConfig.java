package com.autodesk.autolearn.configs;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

/**
 * Cors config
 *
 * @author getsong
 * @since 25/4/2019 10:23 PM
 */
@Component
public class SpringDataRestConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

        config.getCorsRegistry().addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(false).maxAge(3600);
    }
}
