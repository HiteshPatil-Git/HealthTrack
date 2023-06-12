import React, { Component } from 'react';
import UserService from '../services/UserService';

class DonationSlipComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
         
            donation:{},
        user:{}
            

         

        }
 
    }
   
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }

 
    
componentDidMount(){
        const paymentData=localStorage.getItem('payment');
        const payment=JSON.parse(paymentData);
       
             let donationI=payment.donationId;
           const userd=localStorage.getItem('user');
           const userData=JSON.parse(userd);
           
           console.log(userData)
           this.setState({user:userData})
            
       UserService.getDonationDetailsId(donationI).then(res=>{
           this.setState({donation:res.data})
          let id= res.data.donationId;

      

       

       })

       
    }

 
render() {


   
 

    return (
 
 <body id="div1">
        <div  >
        
        
           
            <div className="card col-md-6 offset-md-3" >
            <div   style={{
        backgroundColor: '#FFF8C6',
       
      }}  >
                <h3 className="text-center">Payment Slip</h3>
                <div className="card-body">
                <div className="row">
                        <label className="font-weight-bold">Devotee Name:</label>
                        <div className="form-control">{ this.state.donation.cardOwner }</div>

                    </div>
                    <div className="row">
                        <label className="font-weight-bold">Donation Type</label>
                        <div className="form-control">{ this.state.donation.donationType }</div>

                    </div>
                    <div className="row">
                        <label className="font-weight-bold">Mob No:</label>
                        <div className="form-control">{ this.state.user.mobNo }</div>

                    </div>
                    <div className="row">
                        <label className="font-weight-bold">Payment Id:</label>
                        <div className="form-control">{ this.state.donation.donationId }</div>

                    </div>
                    
                 
                  
                  
                    <div className="row">
                        <label className="font-weight-bold">Donation Amount:Rs-</label>
                        <div className="form-control">{ this.state.donation.donationAmount}</div>
                       
                    </div>
                    
                    

                </div>

            </div>
            </div>
        
            </div>


        </body>
       
    );
}
}

export default DonationSlipComponent;