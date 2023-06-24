import React, { Component } from 'react';
import UserService from '../services/UserService';
import TempleService from '../services/TempleService';
import TimeSlotService from '../services/TimeSlotService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class EpassComponent extends Component {



    book() {
                    
        this.props.history.push('/devotee-verification');
      }

    render() {
        const epassData = window.localStorage.getItem('epassByPassId');
        const epassresponse = JSON.parse(epassData);
        

        return (
            <Formik
                initialValues={{

                    doctorName: epassresponse.doctorName,
                    appId: epassresponse.appId,
                    appDate: epassresponse.appDate,
                    slot: epassresponse.slot,
                    patientName: epassresponse.patientName,
                    
                }}
                validationSchema={Yup.object().shape({
                    doctorName: Yup.string()
                        .required('Doctor Name is required'),
                        appId: Yup.string()
                        .required('Pass ID is required'),
                        appDate: Yup.string()
                        .required('Pass Date is required'),
                        slot: Yup.string()
                        .required('Slot is required'),
                        patientName: Yup.string()
                        .required('Patient Name are required'),
                    

                })}

                


                onSubmit={fields => {
                    console.log('Button Clicked');
                    this.props.history.push('/patient-verification');
                  
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Appointment Details</h4>

                        
                            <div className="form-group">
                                 <label htmlFor="doctorName">Doctor Name</label>
                                <Field name="doctorName" type="text" className={'form-control' + (errors.doctorName && touched.doctorName ? ' is-invalid' : '')} readOnly/>
                                <ErrorMessage name="doctorName" component="div" className="invalid-feedback" />
                            </div>

                        <div className="form-group">
                            <label htmlFor="appId">Appointment ID</label>
                            <Field name="appId" type="text" className={'form-control' + (errors.appId && touched.appId ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="appId" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="appDate">Appointment Date</label>
                            <Field name="appDate" type="text" className={'form-control' + (errors.appDate && touched.appDate ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="appDate" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="slot">Slot</label>
                            <Field name="slot" type="text" className={'form-control' + (errors.slot && touched.slot ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="slot" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="patientName">Patient Name</label>
                            <Field name="patientName" type="text" className={'form-control' + (errors.patientName && touched.patientName ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="patientName" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                         <a style={{ marginRight: '20px' }}  class="btn btn-primary" href="/patient-verification" role="button">Confirm</a>
                         <a style={{ marginRight: '20px' }}  class="btn btn-primary" href="/add-prescription" role="button">Prescribe</a>
                         <a class="btn btn-primary" href="/doctor-scope" role="button">Home</a>
                        </div>
                        
                    </Form>
                )}
            />
        )
    }
}

export default EpassComponent;