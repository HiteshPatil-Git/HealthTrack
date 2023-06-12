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
import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.services.DoctorService;
import com.app.services.DoctorServiceImpl;
import com.app.services.PatientServiceImpl;
import com.app.services.UserServiceImpl;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {
    
    @Autowired
	private DoctorService doctorService;

    /*public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }*/

    @PostMapping("/create")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }
    
    @GetMapping
	public ResponseEntity<List<Doctor>> getAllDoctor()
	{
    	System.out.println("doctor controller");
		List<Doctor> dList = doctorService.getAllDoctorst();
		return ResponseEntity.ok(dList);
	}

    
}