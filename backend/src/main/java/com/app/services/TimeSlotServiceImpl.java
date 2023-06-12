package com.app.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.TimeSlot;
import com.app.repositories.TimeSlotRepository;
import com.app.repositories.UserRepository;

@Service
public class TimeSlotServiceImpl implements TimeSlotService {
	
	@Autowired
	private TimeSlotRepository timeSlotRepository;

	@Override
	public List<TimeSlot>  addTimeSlotDetails(TimeSlot slotDetails, String slot1, int maxPersonPerSlot1, String slot2,
			int maxPersonPerSlot2, String slot3, int maxPersonPerSlot3, String slot4, int maxPersonPerSlot4,
			String doctorName) {
		
		System.out.println("in Add TimeSlotimpl");
		LocalDate slotDate = slotDetails.getSlotDate();
		TimeSlot present = timeSlotRepository.findBySlotDateAndDoctorName(slotDate, doctorName);
		System.out.println("ater find by date & doctorName");

		if(present == null) {
			System.out.println("in if loop");		

			List<TimeSlot> timeslots = new ArrayList<>();

			for (int i = 0; i<4 ; i++) {
				TimeSlot slotDetails1 = new TimeSlot();
				slotDetails1.setSlotDate(slotDate);
				slotDetails1.setDoctorName(doctorName);
				
				if(i==0) {
					slotDetails1.setSlot(slot1);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot1);
					slotDetails1.setAvailableSlot(maxPersonPerSlot1);
				}else if(i==1) {
					slotDetails1.setSlot(slot2);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot2);
					slotDetails1.setAvailableSlot(maxPersonPerSlot2);
				}else if(i==2) {
					slotDetails1.setSlot(slot3);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot3);
					slotDetails1.setAvailableSlot(maxPersonPerSlot3);
				}else if(i==3) {
					slotDetails1.setSlot(slot4);
					slotDetails1.setMaxPersonPerSlot(maxPersonPerSlot4);
					slotDetails1.setAvailableSlot(maxPersonPerSlot4);
				}

				TimeSlot addedSlot = timeSlotRepository.save(slotDetails1);	
				
				timeslots.add(addedSlot);

			}

			return timeslots;
		}
		else {
			return null;

		}

	}

	@Override
	public List<TimeSlot> getAllTimeSlot() {

		List<TimeSlot> tList = timeSlotRepository.findAll();
		return tList;
	}

	@Override
	public TimeSlot getDetailsById(long slotid) {
		
		return timeSlotRepository.getById(slotid);
	}

	@Override
	public List<TimeSlot> getAllByDoctorName(String doctorName) {
		List<TimeSlot> tList = timeSlotRepository.findByDoctorName( doctorName);
		return tList;
	}

	@Override
	public TimeSlot deleteTimeSlotDetails(long slotId) {
		TimeSlot slot = timeSlotRepository.getById(slotId);
		timeSlotRepository.delete(slot);
		return slot;
	}


	/*@Override
	public TimeSlot getDetailsById(int slotId) {
		TimeSlot slot=timeSlotRepository.findBySlotId(slotId);
		
		if (slot != null) {
            return slot;
            
        } else {
            return null;
        }

	}*/





}
