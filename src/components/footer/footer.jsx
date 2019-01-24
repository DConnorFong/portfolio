import React, { Component } from 'react';
import './footer.scss';
import ContactContainer from '../contact/contactContainer'

class Footer extends Component {
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
                link: 'dconnorfong@gmail.com'
            },
            {
                id: 3,
                icon: 'fab fa-linkedin',
                title: 'LinkedIn',
                value: '/in/connor-fong/',
                link: 'https://www.linkedin.com/in/connor-fong/'
            },
            {
                id: 4,
                icon: 'fas fa-desktop',
                title: 'Website',
                value: 'dconnorfong.io',
                link: 'dconnorfong.io'
            },
            {
                id: 5,
                icon: 'fab fa-github',
                title: 'Github',
                value: '/DConnorFong',
                link: 'https://github.com/DConnorFong'
            }
        ]
    };

    render() { 
        return ( 
            <div id="site-footer" class="container">
                <footer class="page-footer">
                    <ContactContainer contactInformation={this.state.contactInformation} />
                </footer>
            </div>
        );
    }
}
 
export default Footer;