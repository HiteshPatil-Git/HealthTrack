import React, { Component, useState } from 'react';
import emailjs from 'emailjs-com';

import EpassService from '../services/AppointmentService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/UserService';

import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}
class BookPoojaComponent extends Component {



    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    render() {

        return (

            <Formik
                initialValues={{
                    passDate: '',
                    peoples: '',
                    slot: '6:00AM-8:00AM',

                }}


                validationSchema={Yup.object().shape({
                    passDate: Yup.date().transform(parseDateString).min(today, 'please select valid date'),


                    peoples: Yup.number()
                        .required('This field is required')
                        .positive('please Enter valid Number')
                        .lessThan(100, 'please select Number of peoples between 1 to 100'),

                    slot: Yup.string()
                        .required('ereq'),

                    templeId: Yup.string()
                        .required("'Temple ID' required"),




                })}

                onSubmit={userData => {
                    emailjs.sendForm('service_flv5uiq', 'template_u56edpm', '.abc', 'user_rwUGjMuz6UWCDzpwVVGPe')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    alert('Booking successfull :-)\n\n' + JSON.stringify(userData, null, 4))
                    EpassService.createEpass(userData).then(res => {
                        this.props.history.push('/pdf');
                    })

                }}


                render={({ errors, status, touched }) => (

                    
                                    <Form className="abc" style={{

                                        marginTop: '100px',
                                        overflow: 'hidden',
                                        marginLeft: '300px',
                                        marginRight: '300px',
                                        padding: '0',

                                    }}>

                                        <p align="right" >
                                            <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>
                                        <h3 className="text-center">Book Pooja Slot</h3>
                                        <div className="form-group">
                                            <label htmlFor="passDate">Pooja Date</label>
                                            <Field name="passDate" type="date" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} />
                                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="peoples">Number Of Peoples</label>
                                            <Field name="peoples" type="text" className={'form-control' + (errors.peoples && touched.peoples ? ' is-invalid' : '')} />
                                            <ErrorMessage name="peoples" component="div" className="invalid-feedback" />
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="slot"> slot</label>
                                            <Field as="select" name="slot" className={'form-control'} >
                                                <option value="6:00AM-8:00AM" selected>6:00AM-8:00AM</option>
                                                <option value="8:30AM-10:30AM">8:30AM-10:30AM</option>
                                                <option value="11:00AM-12PM">11:00AM-12PM</option>
                                                <option value="2PM:00PM-4:00PM">2PM:00PM-4:00PM</option>
                                                <option value="4:30PM-6:30PM">4:30PM-6:30PM</option>
                                                <option value="7:00PM-9:00PM">7:00PM-9:00PM</option>
                                                <option value="09:30PM-11:30PM">09:30PM-11:30PM</option>
                                            </Field>
                                        </div>


                                        <div className="form-group">
                                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Book</button>

                                        </div>
                                    </Form>
                                
                )}
            />
        )
    }
}

export default BookPoojaComponent;