import React, { Component } from 'react';
import Contact from './contact';
import './contactContainer.scss';

class ContactContainer extends Component {
    state = { 
        phone: {
            id: 1,
            icon: 'fas fa-phone',
            title: 'Phone',
            value: '(778) 865-7321',
            link: ''
        },
        email: {
            id: 2,
            icon: 'fas fa-envelope',
            title: 'Email',
            value: 'dconnorfong@gmail.com',
            link: 'dconnorfong@gmail.com'
        },
        linkedin: {
            id: 3,
            icon: 'fab fa-linkedin',
            title: 'LinkedIn',
            value: '/in/connor-fong/',
            link: 'https://www.linkedin.com/in/connor-fong/'
        },
        website: {
            id: 4,
            icon: 'fas fa-desktop',
            title: 'Website',
            value: 'dconnorfong.io',
            link: 'dconnorfong.io'
        },
        github: {
            id: 5,
            icon: 'fab fa-github',
            title: 'Github',
            value: '/DConnorFong',
            link: 'https://github.com/DConnorFong'
        }
    };

    render() { 
        return (
            <React.Fragment> 
                <div className="container site-contacts">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2"><Contact key={1} contact={this.state.phone} /></div>
                        <div className="col-lg-2"><Contact key={2} contact={this.state.email} /></div>
                        <div className="col-lg-2"><Contact key={3} contact={this.state.linkedin} /></div>
                        <div className="col-lg-2"><Contact key={4} contact={this.state.website} /></div>
                        <div className="col-lg-2"><Contact key={5} contact={this.state.github} /></div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactContainer;
