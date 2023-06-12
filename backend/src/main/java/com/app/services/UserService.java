package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.entities.User;

public interface UserService {

	User saveUser(User user);

	

	List<User> getAllUsers();



	Optional<User> getUserByEmailAndPassword(User user);

}
