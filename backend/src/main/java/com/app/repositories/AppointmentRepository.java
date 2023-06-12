package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Appointment;
import com.app.entities.Patient;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	List<Appointment> findByDoctorName(String doctorName);

	List<Appointment> findByPatientName(String patientName);

	Appointment findByAppIdAndDoctorName(Long appId, String doctorName);

	
    
}
