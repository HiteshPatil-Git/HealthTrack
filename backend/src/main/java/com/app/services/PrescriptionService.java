package com.app.services;

import java.util.List;

import com.app.entities.Prescription;

public interface PrescriptionService {

	Prescription createPrescription(Prescription prescription);

	Prescription getDetailsById(long presId);

	List<Prescription> getAllPrescriptions();

	List<Prescription> getAllPresByDoctorName(String doctorName);

	List<Prescription> getAllPresByPatientName(String patientName);

	Prescription getPresByAppId(long appId);

}
