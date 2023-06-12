package com.app.services;

import com.app.entities.Patient;
import com.app.entities.User;

public interface PatientService {

	Patient savePatient(Patient patient);

	Patient updateById(Patient userDetails, Integer userId);

	

	

}
