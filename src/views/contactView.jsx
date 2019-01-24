import React, { Component } from 'react';
import ContactContainer from '../components/contact/contactContainer'

class ContactView extends Component {
    state = { 
        contactInformation: [
            {
                id: 1,
                icon: 'fas fa-phone',
                title: 'Phone',
                value: '(778) 865-7321',
                link: ''
            },
            {
                id: 2,
                icon: 'fas fa-envelope',
                title: 'Email',
                value: 'dconnorfong@gmail.com',
                link: ''
            },
            {
                id: 3,
                icon: 'fab fa-linkedin',
                title: 'LinkedIn',
                value: '/in/connor-fong/',
                link: ''
            },
            {
                id: 4,
                icon: 'fas fa-desktop',
                title: 'Website',
                value: 'dconnorfong.io',
                link: ''
            },
            {
                id: 5,
                icon: 'fab fa-github',
                title: 'Github',
                value: '/DConnorFong',
                link: ''
            }
        ]
    };
    render() { 
        return ( 
            <React.Fragment>
                <ContactContainer contactInformation={this.state.contactInformation} />
            </React.Fragment>
        );
    }
}
 
export default ContactView;