package com.app.entities;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Patient extends User {
	
	@Column(length = 30)
	private String patientName;
	
	@Column( nullable = false)
	private long mobNo;
	
	@Column(unique = true)
	private  long adharNo;

	@NotBlank(message = "Please Enter Your Address")
	private String address;
	
	@Column( nullable = false)
	private int age;
	
	@Column( nullable = false)
	private String Gender;
	
	@Column(length = 5000, nullable = true)
	private String medicalHistory;
	
	

    /*@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Appointment> appointments = new ArrayList<>();*/

}
