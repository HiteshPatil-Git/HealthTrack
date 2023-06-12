package com.app.controllers;

import java.util.List;

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
import com.app.entities.Patient;
import com.app.entities.User;
import com.app.services.PatientService;
import com.app.services.PatientServiceImpl;
import com.app.services.UserServiceImpl;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/patients")
public class PatientController {
	@Autowired
    private PatientService patientService;

    /*public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }*/

    @PostMapping("/create")
    public Patient createPatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    @PutMapping("/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Integer userId, @RequestBody Patient userDetails){
		

		Patient updatedUser=patientService.updateById(userDetails, userId);
		return ResponseEntity.ok(updatedUser);
	}
}