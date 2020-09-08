import React from 'react';
import './contact.scss'

const Contact = () => { 
    return (
        <div id="contact" className="section">
            <div className="container has-text-centered">
                <h1>Get In Touch</h1>
                <h2>Let's start a conversation.</h2>
                <div className="columns">
                    <div className="column is-half is-full-mobile">
                        <div className="card">
                            <p>
                                I am currently interested in full time opportunities starting in fall 2020.
                                If you are hiring software engineers, or just want to say hi, please feel free to send me an email or LinkedIn invite.
                            </p>   
                        </div>
                    </div>
                    <div className="column is-half is-full-mobile" style={{ display: 'flex' }}>
                        <div className="card">
                            <span className="icon"><i className="fas fa-envelope"></i></span>
                            &nbsp;
                            <span className="contact-attribute">dconnorfong@gmail.com</span>
                        </div>
                        <div className="card">
                            <span className="icon"><i className="fas fa-phone"></i></span>
                            &nbsp;
                            <span className="contact-attribute">1+ (778) 865-7321</span>
                        </div>
                    </div>
                </div>
                <a className="button resume-button" href='https://drive.google.com/file/d/19k5yDGhfLZw85q1FinwfFWepEsTgndez/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                    <span className="icon"><i className="fas fa-sticky-note"></i></span>
                    &nbsp;
                    Check out my resume
                </a>
            </div>
        </div>
    );
}

export default Contact;
