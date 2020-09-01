package com.levimartines.myspringproject.services;

import com.levimartines.myspringproject.exceptions.DataIntegrityException;
import com.levimartines.myspringproject.exceptions.ObjectNotFoundException;
import com.levimartines.myspringproject.models.User;
import com.levimartines.myspringproject.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UserService {

    private final UserRepository repo;

    public User find(Long id) {
        Optional<User> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
            "Object not found! Id: " + id + ", Type: " + User.class.getName()));
    }

    @Transactional
    public User insert(User obj) {
        obj.setId(null);
        obj = repo.save(obj);
        return obj;
    }

    public void delete(Long id) {
        find(id);
        try {
            repo.deleteById(id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException("Unable to delete user.");
        }
    }

    public List<User> findAll() {
        return repo.findAll();
    }

}
