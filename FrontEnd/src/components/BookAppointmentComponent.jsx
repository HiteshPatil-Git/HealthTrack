import React, { Component, useState } from 'react';
import emailjs from 'emailjs-com';

import AppointmentService from '../services/AppointmentService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/UserService';

import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}
class BookAppointmentComponent extends Component {



    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    render() {
        const slotData = window.localStorage.getItem('selectedSlot');
        const slotresp = JSON.parse(slotData);
        const userData = window.localStorage.getItem('user');
        const response = JSON.parse(userData);
        const doctorData = window.localStorage.getItem('selectedDoctor');
        const doctorresp = JSON.parse(doctorData);
        console.log('In create timeslot userId =>' + response.userId);
        console.log('slot Id   =  ' + slotresp.slotId);
        console.log('slot date   =  ' + slotresp.appDate);
        console.log('In BookEpass');

        return (

            <Formik
                initialValues={{
                    userId : response.userId,
                    doctorName: doctorresp.doctorName,
                    patientName: response.patientName,
                    appDate: slotresp.slotDate,
                    slot: slotresp.slot,
                    available: slotresp.availableSlot,
                

                }}


                validationSchema={Yup.object().shape({
                    appDate: Yup.date().transform(parseDateString)
                        .min(today, 'please select valid date'),

                    slot: Yup.string()
                        .required('Slot required'),
                    available: Yup.string()
                        .required('Slot required'),

                })}

                onSubmit={userData => {
                    console.log('button clicked'+response.userId)
                    emailjs.sendForm('service_flv5uiq', 'template_u56edpm', '.abc', 'user_rwUGjMuz6UWCDzpwVVGPe')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    alert('Booking successfull :-)\n\n' + JSON.stringify(userData, null, 4))
                    AppointmentService.createAppointment(userData, slotresp.slotId, response.userId).then(res => {

                        if (res === null) {

                            this.props.history.push(`/book-Epass`);
                        }
                        else {
                            this.props.history.push('/pdf');
                        }



                    })

                }}


                render={({ errors, status, touched }) => (



                    <Form className="abc" style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '200px',
                        marginRight: '200px',
                        padding: '0',

                    }}>
                        <h3 className="text-center">Book Appointment Slot</h3>

                        <p align="right" >
                            <button style={{ marginRight: '20px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

                        <div className="form-group">
                            <label htmlFor="doctorName">Doctor Name</label>
                            <Field name="doctorName" type="text" className={'form-control' + (errors.doctorName && touched.doctorName ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="doctorName" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="userId">User Id</label>
                            <Field name="userId" type="text" className={'form-control' + (errors.userId && touched.userId ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="userId" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patientName">Patient Name</label>
                            <Field name="patientName" type="text" className={'form-control' + (errors.patientName && touched.patientName ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="patientName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="appDate">App Date</label>
                            <Field name="appDate" type="date" className={'form-control' + (errors.appDate && touched.appDate ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="appDate" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="slot">Slot Timing</label>
                            <Field name="slot" type="text" className={'form-control' + (errors.slot && touched.slot ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="slot" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="available">Available</label>
                            <Field name="available" type="text" className={'form-control' + (errors.available && touched.available ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="available" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Confirm Booking</button>
                            <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/devotee-scope" role="button">Home</a>

                        </div>
                    </Form>

                )}
            />
        )
    }
}

export default BookAppointmentComponent;