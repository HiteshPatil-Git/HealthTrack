import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class DonationComponent extends Component {
  
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }
    render() {
        return (
            <Formik
                initialValues={{

                    cardNo:'',
                    cvCode:'',
                    expDate:'',
                    cardOwner:'',  
                    donationAmount:'', 
                    donationType:'',
                   
                }}
                validationSchema={Yup.object().shape({
                  
                    cardNo: Yup.string()
                        .min(16,'please enter correct card no')
                        .required('Card No is required'),

                        cvCode: Yup.string()
                        .min(3,'please enter valid code')
                        .max(3,'please enter valid code')
                        .required('This field is required'),

                    expDate: Yup.string()
                       
                        .required('This field is required'),

                        cardOwner: Yup.string()
                      
                        .required('Please Enter your name'),

                        donationAmount: Yup.number()
                        .required('Please Enter Amount')
                        .min(1,'Please enter valid amount'),
                        donationType: Yup.string()
                        .required('this field is required'),
                  
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    UserService.makePayment(fields).then(res =>{
                        this.props.history.push('/donation-pdf');
                    })
                }}

                
                render={({ errors, status, touched }) => (


                    
                  
                    <Form style={{
                       
                        marginTop:'100px',
                        overflow:'hidden',
                        marginLeft: '300px',
                        marginRight:'300px',
                        padding:'0',
                       
                      }}>
                        <p  align="right" >                   
                        <button style={{marginRight:'10px'}} onClick={this.logout} className="btn btn-primary">Logout</button></p>
            
                          <h3 className="text-center">Payment Details </h3>

                          <div className="form-group">
                     <label htmlFor="donationType"> Donation Category</label>
                                            
                                            <Field   as="select" name = "donationType" className={'form-control'} >
                                                <option value = "Donation for Developement purpose" selected>Donation for Developement purpose</option>
                                                <option value = "Donation for Religious purpose">Donation for Religious purpose</option>
                                                <option value = "Donation for Free Prasad Bhojan">Donation for Free Prasad Bhojan</option>
                                            
                                          </Field>
                                                </div> 
                        <div className="form-group" >
                            <label htmlFor="cardNo">Enter Card No</label>
                            <Field name="cardNo" placeholder="xxxx xxxx xxxx xxxx" type="number" className={'form-control' + (errors.cardNo && touched.cardNo ? ' is-invalid' : '')} />
                            <ErrorMessage name="cardNo" component="div" className="invalid-feedback" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="cvCode">CVV Code</label>
                            <Field name="cvCode" placeholder="xxx" type="text" className={'form-control' + (errors.cvCode && touched.cvCode ? ' is-invalid' : '')} />
                            <ErrorMessage name="cvCode" type="number" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expDate">Expiry Date</label>
                            <Field name="expDate"placeholder="MM/YY" type="text" className={'form-control' + (errors.expDate && touched.expDate ? ' is-invalid' : '')} />
                            <ErrorMessage name="expDate" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardOwner">Card Owner Name</label>
                            <Field name="cardOwner" type="text"placeholder="Enter name as on your card" className={'form-control' + (errors.cardOwner && touched.cardOwner ? ' is-invalid' : '')} />
                            <ErrorMessage name="cardOwner" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="donationAmount">Enter Amount</label><h6 style={{color:'red'}}>min donation amount accepted is Rs.1</h6>
                            <Field name="donationAmount"placeholder="amount" type="number" className={'form-control' + (errors.donationAmount && touched.donationAmount ? ' is-invalid' : '')}/>
                            <ErrorMessage name="donationAmount" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                        <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Donate</button>
                        </div>
                        
                    </Form>
                    
                )}
            />
        )
    }
}

export default DonationComponent;