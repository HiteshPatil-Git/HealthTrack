package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.app.entities.Appointment;
import com.app.entities.Patient;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.services.AppointmentService;
import com.app.services.PatientService;
import com.app.services.PatientServiceImpl;
import com.app.services.UserServiceImpl;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    
	@Autowired
	private AppointmentService appointmentService;

   /* public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }*/

    
    @PostMapping("/create")
	public ResponseEntity<?> addNewAppointment(@RequestBody Appointment passDetails,
			@RequestParam(name = "slotId") long slotId,
			@RequestParam(name = "userId") int userId
			){
		
		try {
			
			return new ResponseEntity<>(appointmentService.addAppDetails(passDetails, slotId),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
    
    
    
    @GetMapping("/{appId}")
	public Appointment getAppById(@PathVariable long appId) {
		return appointmentService.getDetailsById(appId);
	
	}
    
    @GetMapping
	public ResponseEntity<List<Appointment>> getAllAppointment()
	{
		List<Appointment> tList = appointmentService.getAllAppointments();
		return ResponseEntity.ok(tList);
	}
    
    @PostMapping("/verification")
	public ResponseEntity<?> loginEpass(@RequestBody Appointment passv)
	{
    	System.out.println("in Appoint. controller verification");
		
		Appointment authenticateEpass = appointmentService.authenticateEpass(passv);
		
		if(authenticateEpass==null) {
				throw new UserNotFoundExc("user not found");	
		}

		return ResponseEntity.ok(authenticateEpass);		
	}
    
    @GetMapping("/doctor/{doctorName}")
	public List<Appointment> getAppByDoctorName(@PathVariable String doctorName) {
    	
    	return appointmentService.getAllByDoctorName(doctorName);
		
	}
    
    @GetMapping("/patient/{patientName}")
	public List<Appointment> getAppByPatientName(@PathVariable String patientName) {
    	
    	return appointmentService.getAllByPatientName(patientName);
		
	}
    
    @GetMapping("/userId")
   	public List<Appointment> getAppByUserId(@RequestParam(name = "userId") int userId) {
       	
       	return appointmentService.getAllByUserId(userId);
   		
   	}

}
