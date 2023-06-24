package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long presId;
    
    private Long appId;
    
    @Column(length = 2000, nullable = true)
    private String morning;
    
    @Column(length = 2000, nullable = true)
    private String noon;
    
    @Column(length = 2000, nullable = true)
    private String evening;
    
    @Column(length = 2000, nullable = true)
    private String night;
    
    @Column(length = 20,name = "pre_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate preDate;
    
    @Column(length = 20,name = "next_visit_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate nextVisitDate;
    
    private String patientName;
    
    private String doctorName;
    
    @Column(length = 2000, nullable = true)
    private String excercisePlan;
    
    @Column(length = 2000, nullable = true)
    private String dietPlan;
    
}
