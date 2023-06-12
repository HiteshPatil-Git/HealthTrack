package com.app.services;

import java.util.List;

import com.app.entities.TimeSlot;

public interface TimeSlotService {

	List<TimeSlot> addTimeSlotDetails(TimeSlot slotDetails, String slot1, int maxPersonPerSlot1, String slot2,
			int maxPersonPerSlot2, String slot3, int maxPersonPerSlot3, String slot4, int maxPersonPerSlot4,
			String doctorName);

	List<TimeSlot> getAllTimeSlot();

	TimeSlot getDetailsById(long slotid);

	List<TimeSlot> getAllByDoctorName(String doctorName);

	TimeSlot deleteTimeSlotDetails(long slotId);

	

	
	

}
