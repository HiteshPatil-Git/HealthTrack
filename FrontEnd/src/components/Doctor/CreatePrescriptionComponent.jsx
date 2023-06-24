

import React, { Component } from 'react';
import UserService from '../../services/UserService';
import TempleService from '../../services/TempleService';
import TimeSlotService from '../../services/TimeSlotService';
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import HeaderComponent from '../HeaderComponent';
import back2 from '../../images/back2.jpg'
import Ram3 from '../../images/Ram3.jpg'
import PrescriptionService from '../../services/PrescriptionService';



const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
class CreatePrescriptionComponent extends Component {

    constructor(props) {
        const epassData = window.localStorage.getItem('epassByPassId');
        const epassresponse = JSON.parse(epassData);
        super(props)
        this.state = {
            pres: [],
            dose: '',
            morning: "=>",
            noon: "=>",
            evening: "=>",
            night: "=>",
            appId: epassresponse.appId,
            patientName: epassresponse.patientName,
            doctorName: epassresponse.doctorName,
            preDate: epassresponse.appDate,
            nextVisitDate: '',
            excercisePlan: '',
            dietPlan: '',
            loading: false,
            message: ""


        }

        this.handleConfirm = this.handleConfirm.bind(this);
        this.onChangeMorning = this.onChangeMorning.bind(this);
        this.onChangeNoon = this.onChangeNoon.bind(this);
        this.onChangeEvening = this.onChangeEvening.bind(this);
        this.onChangeNight = this.onChangeNight.bind(this);
        this.onChangeDose = this.onChangeDose.bind(this);
        this.onChangeExcercisePlan = this.onChangeExcercisePlan.bind(this);
        this.onChangeDietPlan = this.onChangeDietPlan.bind(this);

        this.morning = this.morning.bind(this);
        this.noon = this.noon.bind(this);
        this.evening = this.evening.bind(this);
        this.night = this.night.bind(this);
    }

    onChangeDose(e) {
        this.setState({
            dose: e.target.value
        });
    }

    onChangeMorning(e) {
        this.setState({
            morning: e.target.value
        });
    }
    onChangeNoon(e) {
        this.setState({
            noon: e.target.value
        });
    }
    onChangeEvening(e) {
        this.setState({
            evening: e.target.value
        });
    }
    onChangeNight(e) {
        this.setState({
            night: e.target.value
        });
    }

    morning(e) {
        this.setState({
            morning: this.state.morning + e + "  =>"
        });
    }

    noon(e) {
        this.setState({
            noon: this.state.noon + e + "  =>"
        });
    }
    evening(e) {
        this.setState({
            evening: this.state.evening + e + "  =>"
        });
    }
    night(e) {
        this.setState({
            night: this.state.night + e + "  =>"
        });
    }
    onChangeExcercisePlan(e) {
        this.setState({
            excercisePlan: e.target.value
        });
    }
    onChangeDietPlan(e) {
        this.setState({
            dietPlan: e.target.value
        });
    }

    handleConfirm(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        let pres = {
            morning: this.state.morning, noon: this.state.noon, evening: this.state.evening, night: this.state.night,
            appId: this.state.appId, patientName: this.state.patientName, doctorName: this.state.doctorName,
            preDate: this.state.preDate, nextVisitDate: this.state.nextVisitDate,
            excercisePlan: this.state.excercisePlan, dietPlan: this.state.dietPlan
        }
        console.log('pres =>');

        PrescriptionService.createPrescription(pres).then(
            res => {
                if (res === null) {
                    
                    this.props.history.push('/doctor-scope');
                }
                else {
                    
                    this.props.history.push('/doctor-scope');
                }

            },
            error => {
                this.setState({
                    loading: false,
                    message: "Invalid Login Details"
                });
            }
        );


    }

    render() {


        return (
            <body className="container-fluid" style={{
                width: '150vw',
                height: '150vh',
                margin: '0',
                overflow: 'hidden',
                marginLeft: '0',
                marginRight: '0',
                padding: '0',
                backgroundColor: 'GrayText',
            }}>
                <div className="container-fluid" style={{
                    backgroundImage: `url(${back2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'lightblue',
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'contain',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    padding: '0',
                    margin: '0',
                }}>

                    <div className="col-md-12" >

                        <div class="col-md-4" ></div>

                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{
                            backgroundColor: 'transparent',
                            background: 'rgba(255,255,255,0.3)',
                            marginTop: '10px',

                        }}>

                            <div className="card-body" >


                                <h2> Prescription</h2>

                                <Form className="form-horizontal"
                                    onSubmit={this.handleLogin}
                                    ref={c => {
                                        this.form = c;
                                    }}>


                                    <div className="form-group">
                                        <label htmlFor="dose" >Dose</label>
                                        <Input
                                            //className="form-control transparent-input"
                                            type="text"
                                            className="form-control"
                                            name="dose"
                                            value={this.state.dose}
                                            onChange={this.onChangeDose}
                                            validations={[required]}
                                        />
                                    </div>

                                    <div style={{ marginRight: '20px' }} class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => this.morning(this.state.dose + " :Before")} class="btn btn-secondary"> # Morning</button>
                                        <button type="button" onClick={() => this.morning(this.state.dose + " :After")} class="btn btn-secondary">Morning #</button>
                                    </div>
                                    <div style={{ marginRight: '20px' }} class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => this.noon(this.state.dose + ':Before')} class="btn btn-secondary"> # Noon</button>
                                        <button type="button" onClick={() => this.noon(this.state.dose + " :After")} class="btn btn-secondary">Noon #</button>
                                    </div>
                                    <div style={{ marginRight: '20px' }} class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => this.evening(this.state.dose + ':Before')} class="btn btn-secondary"> # Evening</button>
                                        <button type="button" onClick={() => this.evening(this.state.dose + " :After")} class="btn btn-secondary">Evening #</button>
                                    </div>
                                    <div style={{ marginRight: '20px' }} class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => this.night(this.state.dose + ':Before')} class="btn btn-secondary"> # Night</button>
                                        <button type="button" onClick={() => this.night(this.state.dose + " :After")} class="btn btn-secondary">Night #</button>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="morning" >Morning</label>
                                        <Input
                                            //className="form-control transparent-input"
                                            type="text"
                                            className="form-control"
                                            name="morning"
                                            value={this.state.morning}
                                            onChange={this.onChangeMorning}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="noon">Noon</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="noon"
                                            value={this.state.noon}
                                            onChange={this.onChangeNoon}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="evening">Evening</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="evening"
                                            value={this.state.evening}
                                            onChange={this.onChangeEvening}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="night">Night</label>
                                        <Input type="text" className="form-control" name="night" value={this.state.night} onChange={this.onChangeNight}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="excercisePlan">Excercise Plan</label>
                                        <Input type="text" className="form-control" name="night"
                                            value={this.state.excercisePlan} onChange={this.onChangeExcercisePlan}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dietPlan">Diet Plan</label>
                                        <Input type="text" className="form-control" name="night"
                                            value={this.state.dietPlan} onChange={this.onChangeDietPlan}
                                        />
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <label htmlFor="appId">Appointment Id</label>
                                            <Input name="appId" value={this.state.appId} type="text" className='form-group' readOnly />
                                        </div>
                                        <div class="col">
                                            <label htmlFor="patientName">Patient Name</label>
                                            <Input name="patientName" value={this.state.patientName} type="text" className='form-group' readOnly />
                                        </div>
                                        <div class="col">
                                            <label htmlFor="doctorName">Doctor Name</label>
                                            <Input name="doctorName" value={this.state.doctorName} type="text" className='form-group' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label htmlFor="preDate">Prescription Date</label>
                                            <Input name="preDate" value={this.state.preDate} type="date" className='form-group'/>
                                        </div>
                                        <div class="col">
                                            <label htmlFor="nextVisitDate">Next Visit Date</label>
                                            <Input name="nextVisitDate" value={this.state.nextVisitDate} type="date" className={'form-group'} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button style={{ width: "45%", marginTop: '12px', marginLeft: "15px", marginRight: '15px' }}
                                            className="btn btn-primary btn-block" >
                                            Confirm
                                        </button>

                                        <a button style={{ width: "45%", marginTop: '12px', marginLeft: "15px", marginRight: '15px' }} href="/doctor-scope" className="btn btn-primary">Home</a>

                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div></body>
        );
    }
}



export default CreatePrescriptionComponent;