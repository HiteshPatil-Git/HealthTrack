package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Prescription;
import com.app.repositories.PrescriptionRepository;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;

	@Override
	public Prescription createPrescription(Prescription prescription) {
		
		return prescriptionRepository.save(prescription);
	}

	@Override
	public Prescription getDetailsById(long presId) {
		
		return prescriptionRepository.getById(presId);
	}

	@Override
	public List<Prescription> getAllPrescriptions() {
		List<Prescription> pList = prescriptionRepository.findAll();
		return pList;
	}

	@Override
	public List<Prescription> getAllPresByDoctorName(String doctorName) {
		List<Prescription> pList = prescriptionRepository.findByDoctorName(doctorName);
		return pList;
	}

	@Override
	public List<Prescription> getAllPresByPatientName(String patientName) {
		List<Prescription> pList = prescriptionRepository.findByPatientName(patientName);
		return pList;
	}

	@Override
	public Prescription getPresByAppId(long appId) {
		
		return prescriptionRepository.findByAppId(appId);
	}

}
