import React, { Component } from 'react';
import UserService from '../services/UserService';
import PatientService from '../services/PatientService';


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class CreateUserComponent extends Component {

    render() {
        return (
            <Formik
                initialValues={{

                    patientName: '',
                    email: '',
                    mobNo: '',
                    adharNo: '',
                    address: '',
                    age: '',
                    gender: '',
                    medicalHistory: '',
                    password: '',
                    role: 'Patient'
                }}
                validationSchema={Yup.object().shape({
                    patientName: Yup.string()
                        .required('Patient Name is required'),
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
                    medicalHistory: Yup.string()
                        .max(5000, 'please enter valid adhar number'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    role: Yup.string()
                        .required('Role is required'),

                })}

                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    PatientService.createPatient(fields).then(res => {
                        this.props.history.push('/');
                    })
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Patient SignUp</h4>
                        
                        
                        <div class="row">
                            <div class="col">
                                <label htmlFor="patientName">Patient Name</label>
                                <Field name="patientName" type="text" className={'form-control' + (errors.patientName && touched.patientName ? ' is-invalid' : '')} />
                                <ErrorMessage name="patientName" component="div" className="invalid-feedback" />
                            </div>
                            <div class="col">
                                <label htmlFor="adharNo">Adhar No</label>
                                <Field name="adharNo" type="text" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                            </div>

                        </div>

                        <div class="row">
                            <div class="col">
                                <label htmlFor="mobNo">Mob No</label>
                                <Field name="mobNo" type="text" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                            </div>

                            <div class="col">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
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

                        </div>

                        <div class="row">
                            <div class="col">
                                <label htmlFor="address">Address</label>
                                <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                                <ErrorMessage name="address" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="medicalHistory">Medical History</label>
                                <Field name="medicalHistory" type="text" className={'form-control' + (errors.medicalHistory && touched.medicalHistory ? ' is-invalid' : '')} />
                                <ErrorMessage name="medicalHistory" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <Field as="select" name="role" className={'form-control'} >
                                <option value="Patient">Patient</option>
                            </Field>
                        </div>

                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                            <button type="submit" style={{ marginRight: '20px' }} className="btn btn-primary mr-2">Register</button>
                            <span>
                                <button type="reset" className="btn btn-secondary mr-2">Reset</button>
                            </span>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default CreateUserComponent;