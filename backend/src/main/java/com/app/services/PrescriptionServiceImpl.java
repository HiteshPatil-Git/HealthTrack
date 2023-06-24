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
	public Prescription createPrescription(Prescription pres) {
		System.out.println("In Pres Service");
		
		return prescriptionRepository.save(pres);
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

	@Override
	public Prescription addTimeSlotDetails(Prescription presDetails, String morning, String noon, String evening,
			String night, long appId, String excercisePlan, String dietPlan, String patientName, String doctorName) {

		Prescription pr = new Prescription();
		pr.setAppId(appId);
		pr.setDietPlan(dietPlan);
		pr.setExcercisePlan(excercisePlan);
		pr.setMorning(morning);
		pr.setNoon(noon);
		pr.setEvening(evening);
		pr.setNight(night);
		pr.setDoctorName(doctorName);
		pr.setPatientName(patientName);
		pr.setPreDate(presDetails.getPreDate());
		pr.setNextVisitDate(presDetails.getNextVisitDate());
		
		
		
		return prescriptionRepository.save(pr);
	}

}
