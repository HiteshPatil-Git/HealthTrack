import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginPageComponent from './components/profile/LoginPageComponent';
import CreatePatientComponent from './components/profile/CreatePatientComponent';
import CreateDoctorComponent from './components/profile/CreateDoctorComponent';
import PatientScopeComponent from './components/patient/PatientScopeComponent';
import DoctorScopeComponent from './components/Doctor/DoctorScopeComponent';
import CreatePrescriptionComponent from './components/Doctor/CreatePrescriptionComponent';
import UpdatePrescriptionComponent from './components/Doctor/UpdatePrescriptionComponent';
import UpdateComponent from './components/profile/UpdateComponent';


import CreateTimeSlotComponent from './components/CreateTimeSlotComponent';
import BookAppointmentComponent from './components/BookAppointmentComponent';

import ListEpassComponent from './components/ListEpassComponent';
import AllBookingsComponent from './components/AllBookingsComponent';
import BookPoojaComponent from './components/BookPoojaComponent';

import DonationComponent from './components/DonationComponent';
import DonationSlipComponent from './components/DonationSlipComponent';
import DonationPdfComponent from './components/DonationPdfComponent';

import DoctorListComponent from './components/patient/DoctorListComponent';
import AllSlotComponent from './components/patient/AllSlotComponent';
import ShowPassComponent from './components/ShowPassComponent';
import pdf from './components/pdf';

import PatientVerificationComponent from './components/PatientVerificationComponent';
import EpassComponent from './components/EpassComponent';
import AboutComponent from './components/AboutComponent';


function App() {
  return (
    <body >
      <div>
        <Router>
          <HeaderComponent />

          <div className="container-fluid"
            style={{ padding: '0' }}>
            <switch>

              <Route path="/" exact component={LoginPageComponent}></Route>
              <Route path="/add-patient" component={CreatePatientComponent}></Route>
              <Route path="/add-doctor" component={CreateDoctorComponent}></Route>
              <Route path="/add-prescription" component={CreatePrescriptionComponent}></Route>
              <Route path="/update-prescription" component={UpdatePrescriptionComponent}></Route>
              <Route path="/patient-scope" component={PatientScopeComponent}></Route>
              <Route path="/doctor-scope" component={DoctorScopeComponent}></Route>
              <Route path="/update" component={UpdateComponent}></Route>
              
              <Route path="/create-time-slot" component={CreateTimeSlotComponent}></Route>
              <Route path="/book-Appointment" component={BookAppointmentComponent}></Route>
              
              <Route path="/user" component={ListEpassComponent}></Route>
              <Route path="/all-bookings" component={AllBookingsComponent}></Route>
              <Route path="/book-pooja" component={BookPoojaComponent}></Route>

              <Route path="/donation" component={DonationComponent}></Route>
              <Route path="/donation-details" component={DonationSlipComponent}></Route>
              <Route path="/donation-pdf" component={DonationPdfComponent}></Route>

              <Route path="/doctor-list" component={DoctorListComponent}></Route>
              <Route path="/all-slot" component={AllSlotComponent}></Route>
              <Route path="/show-pass" component={ShowPassComponent}></Route>
              <Route path="/pdf" component={pdf}></Route>

              
              <Route path="/patient-verification" component={PatientVerificationComponent}></Route>
              <Route path="/epass" component={EpassComponent}></Route>
              <Route path="/aboutus" component={AboutComponent}></Route>

            </switch>

          </div>

        </Router>
      </div>
    </body>
  );
}

export default App;
