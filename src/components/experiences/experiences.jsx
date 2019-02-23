import React, { Component } from 'react';
import Experience from '../experience/experience';
import './experiences.scss';

class Experiences extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="experiences" className="section is-long">
                <div className="container is-fluid has-text-centered">
                    <h3>Experience</h3>
                    <h5>These are positions I have held in Software and Engineering.</h5>
                    <div className="timeline is-centered">
                        <div class="timeline-item is-primary">
                        <div class="timeline-marker is-primary"></div>
                        <div class="timeline-content">
                          <Experience />
                        </div>
                      </div>
                      <div class="timeline-item is-warning">
                        <div class="timeline-marker is-warning is-image is-32x32">
                          <img src="http://bulma.io/images/placeholders/32x32.png" />>
                        </div>
                        <div class="timeline-content">
                          <p class="heading">February 2016</p>
                          <p>Timeline content - Can include any HTML element</p>
                        </div>
                      </div>
                    </div>
                    <a className="button is-rounded linkedin-button" href="https://www.linkedin.com/in/connor-fong/" target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i class="fab fa-lg fa-linkedin"></i></span>
                        &nbsp;&nbsp;
                        More info on Linkedin
                    </a>
                </div>
            </section>
        );
    }
}
 
export default Experiences;