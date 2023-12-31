package com.app.services;

import java.util.List;

import com.app.entities.Prescription;

public interface PrescriptionService {

	Prescription createPrescription(Prescription pres);

	Prescription getDetailsById(long presId);

	List<Prescription> getAllPrescriptions();

	List<Prescription> getAllPresByDoctorName(String doctorName);

	List<Prescription> getAllPresByPatientName(String patientName);

	Prescription getPresByAppId(long appId);

	Prescription addTimeSlotDetails(Prescription presDetails);

	Prescription updatePrescription(Prescription presDetails);

}
