package com.app.services;

import java.util.List;

import com.app.entities.Appointment;
import com.app.entities.Patient;
import com.app.entities.TimeSlot;

public interface AppointmentService {

	
	Appointment getDetailsById(long appId);

	List<Appointment> getAllAppointments();

	List<Appointment> getAllByDoctorName(String doctorName);

	List<Appointment> getAllByPatientName(String patientName);

	Appointment addAppDetails(Appointment passDetails, long slotId);

	Appointment authenticateEpass(Appointment passv);

	List<Appointment> getAllByUserId(int userId);

	

	

}
