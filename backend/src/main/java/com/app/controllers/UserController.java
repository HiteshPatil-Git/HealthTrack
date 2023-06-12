package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_excp.TempleNotFoundExc;
import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.User;
import com.app.services.UserService;
import com.app.services.UserServiceImpl;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")


@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
    private UserService userService;

   /* public UserController(UserService userService) {
        this.userService = userService;
    }*/

    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
    	System.out.println("In Login Method");
    	Optional<User> existingUser = userService.getUserByEmailAndPassword(user);
        
    	if (existingUser.isPresent()) {
            return ResponseEntity.ok(existingUser.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
    @GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers()
	{
		List<User> plist = userService.getAllUsers();
		return ResponseEntity.ok(plist);
	}

}