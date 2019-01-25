import React, { Component } from 'react';
import ContactContainer from '../components/contact/contactContainer'

class ContactView extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <ContactContainer contactInformation={this.state.contactInformation} />
            </React.Fragment>
        );
    }
}
 
export default ContactView;