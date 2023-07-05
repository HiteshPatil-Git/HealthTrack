import React, { Component } from 'react';
import UserService from '../services/UserService';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import EpassService from '../services/AppointmentService';

class AllBookingsComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  prescription(appId) {
    

    this.props.history.push(`/book-Epass`);
  }


  render() {

    const epassData = window.localStorage.getItem('epassByUserId');
    const data = JSON.parse(epassData);

    const userData = window.localStorage.getItem('user');
    const response = JSON.parse(userData);


    const tableRows = data.map(
      (element) => {

        return (

          <tr>
            <td>{element.doctorName}</td>
            <td>{element.appId}</td>
            <td>{element.appDate}</td>
            <td>{element.slot}</td>
            <td>
              <button style={{ marginRight: '10px' }} onClick={() => this.prescription(element.appId)} className="btn btn-primary">Prescription</button>
            </td>

          </tr>
        )

      }
    )

    return (

      <div>
        <h3 className="text-center">All Bookings List</h3>
        <p align="right" >
          <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

        <Table hover>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Appointment ID</th>
              <th>Date</th>
              <th>Slot Timing</th>

            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>

      </div>

    )

  }
}
export default AllBookingsComponent;