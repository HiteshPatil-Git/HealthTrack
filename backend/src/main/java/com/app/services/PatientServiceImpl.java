package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Patient;
import com.app.entities.User;
import com.app.repositories.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {
    
	@Autowired
	private PatientRepository patientRepository;

    /*public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }*/

    public Patient savePatient(Patient patient) {
        

        return patientRepository.save(patient);
    }

	@Override
	public Patient updateById(Patient userDetails, Integer userId) {
		Patient user=patientRepository.getById(userId);

		//user.setAdharNo(userDetails.getAdharNo());
		user.setEmail(userDetails.getEmail());
		user.setPassword(userDetails.getPassword());
		user.setMobNo(userDetails.getMobNo());
		user.setAge(userDetails.getAge());
		user.setGender(userDetails.getGender());
		user.setAddress(userDetails.getAddress());
		
		user.setPatientName(userDetails.getPatientName());
		user.setMedicalHistory(userDetails.getMedicalHistory());
		
		return patientRepository.save(user);
	}

    
}
