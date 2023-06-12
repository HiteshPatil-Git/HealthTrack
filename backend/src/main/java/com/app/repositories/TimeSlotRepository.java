package com.app.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Appointment;
import com.app.entities.Patient;
import com.app.entities.TimeSlot;

@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {

	TimeSlot findBySlotDateAndDoctorName(LocalDate slotDate, String doctorName);

	List<TimeSlot> findByDoctorName(String doctorName);

	
	
	

	
    
}
