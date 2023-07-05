package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Appointment;
import com.app.entities.Prescription;
import com.app.entities.TimeSlot;
import com.app.services.PrescriptionService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionController {
    
	@Autowired
	private PrescriptionService prescriptionService;
   

   /* @PostMapping("/create")
    public Prescription createPrescription(@RequestBody Prescription pres) {
    	System.out.println("In Prescription Controller");
        return prescriptionService.createPrescription(pres);
    }*/
    
    @PostMapping("/create")
	public ResponseEntity<?> addNewPrescription(@RequestBody Prescription presDetails){
	
		System.out.println("in add new prescription");
		try {	
						
			return new ResponseEntity<>(prescriptionService.addTimeSlotDetails(presDetails),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
    
    @PostMapping("/update")
   	public ResponseEntity<?> updatePrescriptionDetails(@RequestBody Prescription presDetails){
   	
   		System.out.println("in add new prescription");
   		try {	
   						
   			return new ResponseEntity<>(prescriptionService.updatePrescription(presDetails),HttpStatus.CREATED);
   			
   		}catch (RuntimeException e) {
   			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
   		}
   	}
    
    
    @GetMapping("/{presId}")
   	public Prescription getPresById(@PathVariable long presId) {
   		return prescriptionService.getDetailsById(presId);
   	
   	}
       
    @GetMapping
   	public ResponseEntity<List<Prescription>> getAllPrescription()
   	{
   		List<Prescription> tList = prescriptionService.getAllPrescriptions();
   		return ResponseEntity.ok(tList);
   	}
    
    @GetMapping("/doctor/{doctorName}")
	public List<Prescription> getPresByDoctorName(@PathVariable String doctorName) {
    	
    	return prescriptionService.getAllPresByDoctorName(doctorName);
		
	}
    
    @GetMapping("/patient/{patientName}")
	public List<Prescription> getPresByPatientName(@PathVariable String patientName) {
    	
    	return prescriptionService.getAllPresByPatientName(patientName);
		
	}
    
    @GetMapping("/appId")
	public Prescription getPresByAppointmentId(@RequestParam(name = "appId") long appId) {
    	System.out.println(appId);
    	
    	return prescriptionService.getPresByAppId(appId);
		
	}
    
    
    

    
}
