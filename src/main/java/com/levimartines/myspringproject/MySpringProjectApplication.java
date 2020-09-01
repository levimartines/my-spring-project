package com.levimartines.myspringproject;

import com.levimartines.myspringproject.models.User;
import com.levimartines.myspringproject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class MySpringProjectApplication implements CommandLineRunner {

    @Autowired
    private UserRepository repository;
    @Autowired
    private BCryptPasswordEncoder pe;

    public static void main(String[] args) {
        SpringApplication.run(MySpringProjectApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        User user = new User(null, "levi", "levi@gmail.com", pe.encode("1234"));
        repository.save(user);
    }
}
