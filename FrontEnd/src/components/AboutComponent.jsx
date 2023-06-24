import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import kedar from '../images/kedar.jpg'

import { render } from "react-dom";

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




  render() {
    return (
      <div>
        <div>
          <h5></h5><br></br>
          <h5></h5>
          <h5></h5>
          <h5></h5>
          <h5></h5>

          <h4>&nbsp;&nbsp;&nbsp; HealthTrack System is the website made to simplify the experience of tracking activities for healthier life.</h4>
          <h5></h5><br></br>
          <div style={{ color: "seagreen" }}> <h5>&nbsp;&nbsp;&nbsp; &nbsp;Our prime objective is to simplification of healthtracking activities of patients such as appointment booking, prescription including diet plan and excercise </h5><h5>&nbsp;&nbsp;&nbsp;&nbsp;plan tracking as suggested by doctors. This system also provide assistance to doctors in
            hospital management. </h5>
          </div>
          <div style={{ color: "seagreen", marginTop:"20px" }}>
          <h5>&nbsp;&nbsp;&nbsp; &nbsp;GitHub Link => <a style={{ marginRight: '20px', marginTop: '12px' }}    href="https://github.com/HiteshPatil-Git/HealthTrack.git" > https://github.com/HiteshPatil-Git/HealthTrack.git</a> </h5>
          
          </div>
        </div>
      </div>


    )
  }
}
export default AboutComponent;

