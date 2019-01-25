import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './experience.scss'

class Experience extends Component {
    state = {  }
    render() { 
        return (
            <div className="site-experience">
                <MDBCol>
                  <MDBCard>
                    <MDBCardImage className="img-fluid" src={require('../../assets/' + this.props.experience.link)} waves />
                    <MDBCardBody>
                      <h4><b>{this.props.experience.company}</b></h4>
                      <h5><b>{this.props.experience.title}</b></h5>
                      <p><b>{this.props.experience.date}</b></p>
                      <MDBCardText>{this.props.experience.description}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
            </div>
        )
    }
}
 
export default Experience;