
import React, { Component } from 'react';
import back2 from '../../images/back2.jpg'
import donation from '../../images/donation.png';
import book from '../../images/book.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'
import book4 from '../../images/book4.jpg'
import book5 from '../../images/book5.jpg'
import back3 from '../../images/back3.jpg'
import swastik2 from '../../images/swastik2.jpg'
import back6 from '../../images/back6.jpg'
import TimeSlotService from '../../services/TimeSlotService';
import Table from 'react-bootstrap/Table';

class DoctorListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }

        this.bookEpass = this.bookEpass.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.logout = this.logout.bind(this);
    }

    updateProfile(id) {
        this.props.history.push(`/update/${id}`);
    }
    logout = () => {
        localStorage.removeItem('user');
        localStorage.clear();
        window.location.href = "/";
    }
    bookEpass() {
        const doctorData = window.localStorage.getItem('selectedDoctor');
        const doctorresp = JSON.parse(doctorData);
        console.log('temple Id' + doctorresp.doctorName);
        console.log(this.state.id);
        TimeSlotService.getSlotByDoctorName(doctorresp.doctorName).then(
            res => {
                console.log('response received ');

                this.props.history.push(`/all-slot`);

            })
    }



    componentDidMount() {
        const userData = window.localStorage.getItem('user');
        const UserDate = JSON.parse(userData);

        let UserId = UserDate.userId;
        console.log('User Id' + UserId)
        this.setState({ id: UserId })

    }
    render() {
        const status = false;
        const ddata = JSON.parse(localStorage.getItem('alldoctor'));
        console.log(ddata);
        const tableRows = ddata.map(
            (element) => {
                return (

                    <tr>
                        <td>{element.hospitalName}</td>
                        <td>{element.doctorName}</td>
                        <td>{element.address}</td>

                        <td>
                            <button style={{ marginRight: '10px' }} onClick={() => this.bookEpass(localStorage.setItem("selectedDoctor", JSON.stringify(element)))} className="btn btn-primary">Book</button>
                        </td>

                    </tr>

                )
            }
        )

        return (

            <body className="container-fluid" style={{
                width: '100vw',
                height: '100vh',
                margin: '0',
                alignItems: 'center',
                overflow: 'hidden',

                marginRight: '0',
                marginTop: '0',
                padding: '0',

            }}>

                <div className="bg-image" style={{


                    backgroundImage: `url('${back6}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'lightblue',
                    width: '100vw',
                    height: '100vh',
                    marginRight: '0px',
                    backgroundSize: 'cover',
                    alignItems: 'center',
                    padding: '0',
                    margin: '0',
                }} >

                    <div>

                        <div>
                            <Table hover>
                                <thead>
                                    <tr>
                                        
                                        <th>Hospital Name</th>
                                        <th>Doctor Name</th>
                                        <th>Address</th>

                                        <th><p align="right" >
                                            <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows}

                                </tbody>
                            </Table>

                        </div>

                    </div>

                </div>

            </body>
        );
    }
}

export default DoctorListComponent;


