
import React, { Component } from 'react';
import UserService from '../services/UserService';
import DoctorService from '../services/DoctorService';
import EpassService from '../services/AppointmentService';
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import HeaderComponent from './HeaderComponent';
import back2 from '../images/back2.jpg'
import Ram3 from '../images/Ram3.jpg'
import AppointmentService from '../services/AppointmentService';



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
class PatientVerificationComponent extends Component {
    

  constructor(props) {
    const userData = window.localStorage.getItem('user');
        const response = JSON.parse(userData);
    super(props)
    this.state = {
      passv: [], 
      appId: '',
      doctorName: response.doctorName,
      loading: false,
      message: ""

    }

    this.handleVerifaction = this.handleVerifaction.bind(this);
    this.onChangeAppId = this.onChangeAppId.bind(this);
    this.onChangeDoctorName = this.onChangeDoctorName.bind(this);
  }

  onChangeAppId(e) {
    this.setState({
      appId: e.target.value
    });
  }

  onChangeDoctorName(e) {
    this.setState({
      doctorName: e.target.value
    });
  }

  handleVerifaction(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let passv = { appId: this.state.appId, doctorName: this.state.doctorName }
      console.log('passv =>' + JSON.stringify(passv));
      AppointmentService.getPassByPassId(passv).then(
        res => {
          if (res != null) {
              this.props.history.push('/epass');
          }
          
        },
        error => {
          this.setState({
            loading: false,
            message: "Invalid Pass Details"
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }

  }

  render() {


    return (
        

      <body className="container-fluid" style={{
        width: '150vw',
        height: '100vh',
        margin: '0',
        overflow: 'hidden',
        marginLeft: '0',
        marginRight: '0',
        padding: '0',
        
      }}>
        <div className="container-fluid" style={{
         
          width: '100vw',
          height: '100vh',
          backgroundSize: 'contain',
          backgroundSize: '100% 100%',
          display: 'flex',
          padding: '0',
          margin: '0',
        }}>
            

          <div className="col-md-12" >
            
          <h3 className="text-center">Verification</h3>

            <div className="card col-md-6 offset-md-3 offset-md-3" style={{

              backgroundColor: 'transparent',
              background:
                'rgba(255,255,255,0.3)',
              marginTop: '50px',

            }}>

              <div className="card-body" >

                <Form className="form-horizontal"
                  onSubmit={this.handleVerifaction}
                  ref={c => {
                    this.form = c;
                  }}
                >
                  <div className="form-group"
                  >
                    <label htmlFor="appId" >Appointment ID</label>
                    <Input
                      //className="form-control transparent-input"
                      type="text"
                      className="form-control"
                      name="appId"
                      value={this.state.appId}
                      onChange={this.onChangeAppId}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctorName">Doctor Name</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="doctorName"
                      value={this.state.doctorName}
                      onChange={this.onChangeDoctorName}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <button style={{ marginRight: '20px', marginTop: '12px' }}
                      className="btn btn-primary btn-block"
                      disabled={this.state.loading}>
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Verify</span>
                    </button>

                    <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/doctor-scope" role="button">Home</a>
                  </div>


                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  
                  <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />

                </Form>
              </div>
            </div>
          </div>
        </div></body>
    );
  }
}

export default PatientVerificationComponent;
