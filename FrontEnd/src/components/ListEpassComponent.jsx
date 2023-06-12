import axios from 'axios';
import React, { Component } from 'react';
import EpassService from '../services/AppointmentService';
import UserService from '../services/UserService';

class ListEpassComponent extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            
            epass : [],
            donation:[]

        }
        this.deleteEpass=this.deleteEpass.bind(this);
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }

    componentDidMount(){
        EpassService.getEpass().then((res)=>{
            this.setState({ epass : res.data})
        })
        UserService.getAllDonations().then((res)=>{
            this.setState({donation:res.data})
        })
    }
    deleteEpass(passId){
        EpassService.deleteEpass(passId).then( res => {
            this.setState({epass: this.state.epass.filter(epass => epass.passId !== passId)});
            alert("EPass Cancelled Successfull")
        })
    }

    logout = () => {
        localStorage.clear();
      
        window.location.href = "/";
      } 
    render() {
     
        return (
            <div>
                <span style={{color:"green"}}></span>
      <button onClick={this.logout} class='btn btn-success pull-right'>
  Logout
          </button>
                <h2 className="text-center">Epass List</h2>
                <div className="row" style={{
                       
                       marginTop:'100px',
                       overflow:'hidden',
                       marginLeft: '100px',
                       marginRight:'100px',
                       padding:'0',
                      
                     }}>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>pass Id</th>
                                <th>pass Date</th>
                                <th>No Of Peoples</th>
                                <th>Slot</th>
                                <th>Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.epass.map(
                                    epass =>
                                    <tr key = {epass.id}>
                                          <td>{epass.passId}</td>
                                        <td>{epass.passDate}</td>
                                        <td>{epass.peoples}</td>
                                        <td>{epass.slot}</td>
                                        <td>
                                        <div class="alert alert-success">
                                            <button onClick={ () => this.deleteEpass(epass.passId)} className="btn btn-danger">Cancel Epass</button>
                                            </div>
                                        </td>
                                      
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>

                <h2 className="text-center">Donations</h2>
                <div className="row" style={{
                       
                       marginTop:'100px',
                       overflow:'hidden',
                       marginLeft: '100px',
                       marginRight:'100px',
                       padding:'0',
                      
                     }}>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Donation Id</th>
                                <th>Card No</th>
                                <th>Cvv Code</th>
                                <th>Expiry date</th>
                                <th>card owner</th>
                                <th>Amount</th>
                                <th>Donation Type</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.donation.map(
                                    donation =>
                                    <tr key = {donation.donationId}>
                                         <td>{donation.donationId}</td>
                                          <td>{donation.cardNo}</td>
                                        <td>{donation.cvCode}</td>
                                        <td>{donation.expDate}</td>
                                        <td>{donation.cardOwner}</td>
                                        <td>{donation.donationAmount}</td>
                                        <td>{donation.donationType}</td>
                                        
                                      
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>





            </div>
        );
    }
}

export default ListEpassComponent;