import React, { Component } from 'react';
import UserService from '../services/UserService';
import TempleService from '../services/TempleService';
import TimeSlotService from '../services/TimeSlotService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}

class CreateTimeSlotComponent extends Component {

    render() {
        const userData=window.localStorage.getItem('user');
        const response=JSON.parse(userData);
        console.log('In create timeslot templeId =>' + response.templeId);

        return (
            <Formik
                initialValues={{
                    doctorName: response.doctorName,
                                       
                    slot1: '9:00AM-11:00AM',
                    slot2: '11:30AM-02:00PM',
                    slot3: '04:00PM-07:00PM',
                    slot4: '7:30PM-10:00PM',
                    maxPersonPerSlot1: '10',
                    maxPersonPerSlot2: '10',
                    maxPersonPerSlot3: '15',
                    maxPersonPerSlot4: '15',
                    
                }}
                validationSchema={Yup.object().shape({
                    slotDate: Yup.date().transform(parseDateString)
                        .min(today, 'please select valid date'),
                    doctorName: Yup.string()
                        .required('Doctor Name is required'),
                    
                    slot1: Yup.string()
                        .required('Slot1 is required'),
                    slot2: Yup.string()
                        .required('Slot2 is required'),
                    slot3: Yup.string()
                        .required('Slot3 is required'),
                    slot4: Yup.string()
                        .required('Slot4 is required'),
                    maxPersonPerSlot1: Yup.string()
                        .required('maxPersonPerSlot1 is required'),
                    maxPersonPerSlot2: Yup.string()
                        .required('maxPersonPerSlot2 is required'),
                    maxPersonPerSlot3: Yup.string()
                        .required('maxPersonPerSlot3 is required'),
                    maxPersonPerSlot4: Yup.string()
                        .required('maxPersonPerSlot4 is required'),
                   
                   
                })}

                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    TimeSlotService.createTimeSlot(fields, response.doctorName).then(res => {
                        this.props.history.push('/doctor-scope');
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
                        <h4 className="text-center">Create Time Slot</h4>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="doctorName">Doctor Name</label>
                                <Field name="doctorName" type="text" className={'form-control' + (errors.doctorName && touched.doctorName ? ' is-invalid' : '')} readOnly/>
                                <ErrorMessage name="doctorName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="slotDate">Slot Date</label>
                            <Field name="slotDate" type="date" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} />
                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                        </div>
                        <div class="row">
                            <div class="col">
                                <label htmlFor="slot1">Slot-1 Timing</label>
                                <Field as="select" name="slot1" className={'form-control'} >
                                    <option value="9:00AM-11:00AM">9:00AM-11:00AM</option>
                                </Field>
                            </div>
                            <div class="col">
                                <label htmlFor="Max. Devotees allowed for Slot-1 Timing">Max. No. of Patients can be diagnosed for Slot-1 Timing</label>
                                <Field name="maxPersonPerSlot1" type="text" className={'form-control' + (errors.maxPersonPerSlot1 && touched.maxPersonPerSlot1 ? ' is-invalid' : '')} placeholder="Suitable to Slot Timing of 2 hour" />
                                <ErrorMessage name="maxPersonPerSlot1" component="div" className="invalid-feedback" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label htmlFor="slot2">Slot-2 Timing</label>
                                <Field as="select" name="slot2" className={'form-control'} >
                                    <option value="11:30AM-02:00PM">11:30AM-02:00PM</option>
                                </Field>
                            </div>
                            <div class="col">
                                <label htmlFor="maxPersonPerSlot2">Max. No. of Patients can be diagnosed for Slot-2 Timing</label>
                                <Field name="maxPersonPerSlot2" type="text" className={'form-control' + (errors.maxPersonPerSlot2 && touched.maxPersonPerSlot2 ? ' is-invalid' : '')} placeholder="Suitable to Slot Timing of 2 hour" />
                                <ErrorMessage name="maxPersonPerSlot2" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <label htmlFor="slot3">Slot-3 Timing</label>
                                <Field as="select" name="slot3" className={'form-control'} >
                                    <option value="04:00PM-07:00PM">04:00PM-07:00PM</option>
                                </Field>
                            </div>
                            <div class="col">
                                <label htmlFor="maxPersonPerSlot3">Max. No. of Patients can be diagnosed for Slot-3 Timing</label>
                                <Field name="maxPersonPerSlot3" type="text" className={'form-control' + (errors.maxPersonPerSlot3 && touched.maxPersonPerSlot3 ? ' is-invalid' : '')} placeholder="Suitable to Slot Timing of 3 hour" />
                                <ErrorMessage name="maxPersonPerSlot3" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <label htmlFor="slot4">Slot-4 Timing</label>
                                <Field  as="select" name="slot4" className={'form-control'} >
                                    <option value="7:30PM-10:00PM">7:30PM-10:00PM</option>
                                </Field>
                            </div>
                            <div class="col">
                                <label htmlFor="maxPersonPerSlot4">Max. No. of Patients can be diagnosed for Slot-4 Timing</label>
                                <Field name="maxPersonPerSlot4" type="text" className={'form-control' + (errors.maxPersonPerSlot4 && touched.maxPersonPerSlot4 ? ' is-invalid' : '')} placeholder="Suitable to Slot Timing of 2.5 hour" />
                                <ErrorMessage name="maxPersonPerSlot4" component="div" className="invalid-feedback" />
                            </div>
                        </div>
      

                        
                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Register</button>
                            <span>
                                <button style={{ marginRight: '20px', marginTop: '12px' }} type="reset" className="btn btn-secondary mr-2">Reset</button>
                            </span>

                            <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/doctor-scope" role="button">Home</a>
 
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default CreateTimeSlotComponent;