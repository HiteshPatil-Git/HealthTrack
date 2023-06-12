package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Prescription;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

	List<Prescription> findByDoctorName(String doctorName);

	List<Prescription> findByPatientName(String patientName);

	Prescription findByAppId(long appId);
    
}