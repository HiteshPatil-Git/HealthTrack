package com.app.services;

import java.util.List;

import com.app.entities.Doctor;

public interface DoctorService {

	Doctor saveDoctor(Doctor doctor);

	List<Doctor> getAllDoctorst();

}
