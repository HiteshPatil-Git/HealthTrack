import React, { Component } from 'react';
import PatientService from '../../services/PatientService';
import DoctorService from '../../services/DoctorService';
import TimeSlotService from '../../services/TimeSlotService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class UpdateComponent extends Component {

    render() {
        const userData = window.localStorage.getItem('user');
        const response = JSON.parse(userData);
        console.log('In update user');

        return (
            <Formik
                initialValues={{

                    hospitalName: response.hospitalName,
                    doctorName: response.doctorName,
                    patientName: response.patientName,
                    email: response.email,
                    mobNo: response.mobNo,
                    adharNo: response.adharNo,
                    address: response.address,
                    password: response.password,
                    age: response.age,
                    gender: response.gender,
                    specialization: response.specialization,
                    medicalHistory: response.medicalHistory,
                    qualification: response.qualification,
                    role: response.role

                }}

                validationSchema={Yup.object().shape({
                    hospitalName: Yup.string()
                        .required('Hospital Name is required'),
                    doctorName: Yup.string()
                        .required('Doctor Name is required'),
                    patientName: Yup.string()
                        .required('Patient Name is required'),
                    medicalHistory: Yup.string()
                        .max(5000, 'please enter valid adhar number'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    mobNo: Yup.string()
                        .min(10, 'please enter valid number')
                        .required('Mob No is required'),
                    adharNo: Yup.string()
                        .min(12, 'please enter valid adhar number')
                        .required('Adhar No is required'),
                    address: Yup.string()
                        .required('Address is required'),
                    age: Yup.string()
                        .required('Age is required'),
                    gender: Yup.string()
                        .required('Gender is required'),
                    specialization: Yup.string()
                        .required('Specialization is required'),
                    qualification: Yup.string()
                        .required('Qualification is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    role: Yup.string()
                        .required('Role is required'),

                })}


                onSubmit={fields => {
                    console.log('Button Clicked');

                    if (response.role === 'doctor') {
                        DoctorService.updateDoctor(fields, response.userId).then(updatedresponse => {
                            console.log(updatedresponse);
                            if (updatedresponse === null) {
                                alert('Not Updated!! :-)')
                            }
                            else {
                                this.props.history.push('/doctor-scope');
                                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }
                        })

                    }
                    else {
                        PatientService.updateUser(fields, response.userId).then(updatedresponse => {
                            console.log(updatedresponse);
                            if (updatedresponse == null) {
                                alert('Not Updated!! :-)')
                            }
                            else {
                                this.props.history.push('/patient-scope');
                                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }
                        })
                    }
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Update Profile</h4>

                        {response.role === 'Doctor' ?
                            <div className="form-group">
                                <label htmlFor="hospitalName">Hospital Name</label>
                                <Field name="hospitalName" type="text" className={'form-control' + (errors.hospitalName && touched.hospitalName ? ' is-invalid' : '')} />
                                <ErrorMessage name="hospitalName" component="div" className="invalid-feedback" />
                            </div> : ''}


                        {response.role === 'Doctor' ?
                            <div className="form-group">
                                <label htmlFor="doctorName">Doctor Name</label>
                                <Field name="doctorName" type="text" className={'form-control' + (errors.doctorName && touched.doctorName ? ' is-invalid' : '')} />
                                <ErrorMessage name="doctorName" component="div" className="invalid-feedback" />
                            </div>
                            : <div className="form-group">
                                <label htmlFor="patientName">Patient Name</label>
                                <Field name="patientName" type="text" className={'form-control' + (errors.patientName && touched.patientName ? ' is-invalid' : '')} />
                                <ErrorMessage name="patientName" component="div" className="invalid-feedback" />
                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>

                        {response.role === 'Doctor' ?
                            <div class="row">
                                <div class="col">
                                    <label htmlFor="qualification">Qualification</label>
                                    <Field name="qualification" type="text" className={'form-control' + (errors.qualification && touched.qualification ? ' is-invalid' : '')} />
                                    <ErrorMessage name="qualification" component="div" className="invalid-feedback" />
                                </div>

                                <div class="col">
                                    <label htmlFor="specialization">Specialization</label>
                                    <Field name="specialization" type="text" className={'form-control' + (errors.specialization && touched.specialization ? ' is-invalid' : '')} />
                                    <ErrorMessage name="specialization" component="div" className="invalid-feedback" />
                                </div>

                            </div>
                            : <div className="form-group">
                                <label htmlFor="medicalHistory">Medical History</label>
                                <Field name="medicalHistory" type="text" className={'form-control' + (errors.medicalHistory && touched.medicalHistory ? ' is-invalid' : '')} />
                                <ErrorMessage name="medicalHistory" component="div" className="invalid-feedback" />
                            </div>
                        }

                        <div class="row">
                            <div class="col">
                                <label htmlFor="mobNo">Mobile No</label>
                                <Field name="mobNo" type="mobNo" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                            </div>


                            <div class="col">
                                <label htmlFor="adharNo">Aadhar No</label>
                                <Field name="adharNo" type="text" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} readOnly />
                                <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>


                            <div class="col">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label htmlFor="age">Age</label>
                                <Field name="age" type="text" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                                <ErrorMessage name="age" component="div" className="invalid-feedback" />
                            </div>

                            <div class="col">
                                <label htmlFor="gender">Gender</label>
                                <Field as="select" name="gender" className={'form-control'} >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Field>
                            </div>
                            <div class="col">
                                <label htmlFor="role">Role</label>
                                <Field name="role" type="text" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')} readOnly />
                                <ErrorMessage name="role" component="div" className="invalid-feedback" />
                            </div>
                        </div>


                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Update</button>
                            <span>
                                <button style={{ marginRight: '20px', marginTop: '12px' }} type="reset" className="btn btn-secondary mr-2">Reset</button>
                            </span>
                            {response.role === 'Doctor'
                                ?
                                <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/doctor-scope" role="button">Home</a>
                                : <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/patient-scope" role="button">Home</a>
                            }


                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default UpdateComponent;