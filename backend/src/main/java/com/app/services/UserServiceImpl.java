package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
	private UserRepository userRepository;

	
	@Override
    public User saveUser(User user) {
        
        return userRepository.save(user);
    }

    
    @Override
    public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
	public Optional<User> getUserByEmailAndPassword(User user) {
		String username = user.getEmail();
		String password = user.getPassword();
		
		return userRepository.findByEmailAndPassword(username,password);
	}

    
}