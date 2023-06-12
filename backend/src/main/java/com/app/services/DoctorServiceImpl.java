package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Doctor;
import com.app.repositories.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
    
	@Autowired
	private DoctorRepository doctorRepository;

    /*public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }*/

    public Doctor saveDoctor(Doctor doctor) {
        

        return doctorRepository.save(doctor);
    }

	@Override
	public List<Doctor> getAllDoctorst() {
		System.out.println("Doctor Service Impl");
		List<Doctor> dList = doctorRepository.findAll();
		return dList;
	}

    
}