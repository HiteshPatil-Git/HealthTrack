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
		
		Prescription pre = prescriptionRepository.findByAppId(appId);
		
		if (pre != null)
			return pre;
		return null;
	}

	@Override
	public Prescription addTimeSlotDetails(Prescription presDetails) {

		Prescription pr = new Prescription();
		/*pr.setAppId(appId);
		pr.setDietPlan(dietPlan);
		pr.setExcercisePlan(excercisePlan);
		pr.setMorning(morning);
		pr.setNoon(noon);
		pr.setEvening(evening);
		pr.setNight(night);
		pr.setDoctorName(doctorName);
		pr.setPatientName(patientName);
		pr.setPreDate(presDetails.getPreDate());
		pr.setNextVisitDate(presDetails.getNextVisitDate());*/
		
		
		
		return prescriptionRepository.save(presDetails);
	}


	@Override
	public Prescription updatePrescription(Prescription presDetails) {
		// TODO Auto-generated method stub
		return null;
	}

}
