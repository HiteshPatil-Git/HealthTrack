package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.entities.Appointment;

import com.app.entities.Patient;
import com.app.entities.TimeSlot;
import com.app.repositories.AppointmentRepository;
import com.app.repositories.PatientRepository;
import com.app.repositories.TimeSlotRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService{
    
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private TimeSlotRepository timeSlotRepository;
	
	@Autowired
	private PatientRepository patientRepository;


	@Override
	public Appointment addAppDetails(Appointment passDetails, long slotId) {
		TimeSlot selectedSlot = timeSlotRepository.getById(slotId);
		int available = selectedSlot.getAvailableSlot();
		if (available >0) {
			
			Appointment a1 = new Appointment();
			a1.setAppDate(passDetails.getAppDate());
			a1.setSlot(passDetails.getSlot());
			a1.setPatientName(passDetails.getPatientName());
			a1.setDoctorName(selectedSlot.getDoctorName());
			
			
			Appointment bookedAppointment = appointmentRepository.save(a1);
			System.out.println("Appointment saved");	
			available--;
			
			selectedSlot.setAvailableSlot( available );
			
			System.out.println(selectedSlot.getAvailableSlot());
			
			timeSlotRepository.save(selectedSlot);	
			
			return bookedAppointment;			
		}else {
			return null;
			
		}
		
				

	}

	@Override
	public Appointment getDetailsById(long appId) {
		
		return appointmentRepository.getById(appId);
	}

	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

	@Override
	public List<Appointment> getAllByDoctorName(String doctorName) {
		List<Appointment> tList = appointmentRepository.findByDoctorName( doctorName);
		return tList;
	}

	@Override
	public List<Appointment> getAllByPatientName(String patientName) {
		List<Appointment> tList = appointmentRepository.findByPatientName( patientName);
		return tList;
	}

	@Override
	public Appointment authenticateEpass(Appointment passv) {
		
		Long appId=passv.getAppId();
		
		String doctorName=passv.getDoctorName();
		
		
		return appointmentRepository.findByAppIdAndDoctorName(appId, doctorName);
	}

	

	
	
	

    
    /*@Override
	public Appointment saveAppointment(Appointment appointment, long patient_id) {
    	
    	Patient patient = patientRepository.getById(patient_id);
    	System.out.println("Patient found"+patient.getAddress());
    	appointment.setPatient(patient);
    	Appointment savedAppointment = appointmentRepository.save(appointment);
    	System.out.println("Appo saved");	   	
    	List<Appointment> listAppo =  appointmentRepository.findByPatient(patient);  	
    	patient.setAppointments(listAppo);    	
    	patientRepository.save(patient);
		return savedAppointment;		
    }*/

    

	
}

