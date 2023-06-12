import React, { Component } from 'react';
import UserService from '../../services/UserService';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import EpassService from '../../services/AppointmentService';

import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date());
  return parsedDate;
}


class AllSlotComponent extends Component {

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

  book() {
    const slotData = window.localStorage.getItem('selectedSlot');
    const slotresp = JSON.parse(slotData);
    console.log('slot Date ==> ' + slotresp.slotDate);
    console.log('slot ID ==> ' + slotresp.slotId);
    console.log('slot available ==> ' + slotresp.availableSlot);

    this.props.history.push(`/book-Appointment`);
  }


  render() {

    const slotData = window.localStorage.getItem('slotbydoctor');
    const data = JSON.parse(slotData);
    const userData = window.localStorage.getItem('user');
    const response = JSON.parse(userData);
    
    const tableRows = data.map(
      (element) => {
        console.log('in all slot'+element.slotId);

        return (

          <tr>
            <td>{element.slotId}</td>
            <td>{element.slotDate}</td>
            <td>{element.slot}</td>
            <td>{element.availableSlot}</td>

            {response.role === 'Patient' ?
              <p align="right" >
                <button style={{ marginRight: '100px' }} onClick={() => this.book(localStorage.setItem("selectedSlot", JSON.stringify(element)))} className="btn btn-primary">Book</button></p>
              : ''}

          </tr>


        )

      }
    )

    return (

      <div>
        <h3 className="text-center">All Slot List</h3>
        <p align="right" >
          <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

        <Table hover>
          <thead>
            <tr>
              <th>Slot ID</th>
              <th>Date</th>
              <th>Slot Timing</th>
              <th>Available</th>

              {response.role === 'Patient' ? <th></th> : ''}
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
export default AllSlotComponent;