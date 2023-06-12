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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.app.entities.TimeSlot;
import com.app.entities.User;

import com.app.services.TimeSlotService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/timeslots")
public class TimeSlotController {
	
	@Autowired
	private TimeSlotService  timeslotService;
	
	public TimeSlotController() {
		System.out.println("in cnst of"+getClass().getName());
	}
		
	
	@PostMapping("/create")
	public ResponseEntity<?> addNewTimeSlot(@RequestBody TimeSlot slotDetails,
			@RequestParam(name = "slot1") String slot1, 
			@RequestParam(name = "maxPersonPerSlot1") int maxPersonPerSlot1,
			@RequestParam(name = "slot2") String slot2, 
			@RequestParam(name = "maxPersonPerSlot2") int maxPersonPerSlot2,
			@RequestParam(name = "slot3") String slot3, 
			@RequestParam(name = "maxPersonPerSlot3") int maxPersonPerSlot3,
			@RequestParam(name = "slot4") String slot4, 
			@RequestParam(name = "maxPersonPerSlot4") int maxPersonPerSlot4,
			@RequestParam(name = "doctorName") String doctorName){
	
		System.out.println("in add new user"+slotDetails);
		try {	
			
			System.out.println(doctorName);
						
			return new ResponseEntity<>(timeslotService.addTimeSlotDetails(slotDetails, slot1, maxPersonPerSlot1,slot2, maxPersonPerSlot2,
					 slot3,  maxPersonPerSlot3,  slot4,  maxPersonPerSlot4, doctorName),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
	
	
	@GetMapping
	public ResponseEntity<List<TimeSlot>> getAllTimeSlot()
	{
		List<TimeSlot> tList = timeslotService.getAllTimeSlot();
		return ResponseEntity.ok(tList);
	}
	
		@GetMapping("/{slotid}")
		public TimeSlot getSlotById(@PathVariable long slotid) {
			return timeslotService.getDetailsById(slotid);
		
		}
		
		
		@GetMapping("/doctor/{doctorName}")
		public List<TimeSlot> getSlotByDoctorName(@PathVariable String doctorName) {
			System.out.println("in controller");
			return timeslotService.getAllByDoctorName(doctorName);
		}
	
	@DeleteMapping("/{slotId}")
	public ResponseEntity<?>  deleteTimeSlotDetails(@PathVariable long slotId)
	{try {
		return new ResponseEntity<>(timeslotService.deleteTimeSlotDetails(slotId), HttpStatus.OK);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	}
	


}
