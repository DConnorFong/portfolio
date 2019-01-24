import React, { Component } from 'react';
import Contact from './contact';
import './contactContainer.scss';

class ContactContainer extends Component {
    state = {
        contactInformation: this.props.contactInformation
    };

    render() { 
        return (
            <React.Fragment> 
                <div className="container site-contacts">
                    {this.renderContact()}
                </div>
            </React.Fragment>
        );
    }

    renderContact() {
        if (this.state.contactInformation.length === 0) 
            return <p>No contacts provided</p>;
        else
            return <div className="row">{this.state.contactInformation.map(contact => <div className="col-lg-2"><Contact key={contact.id} contact={contact}/></div>)}</div>;
    }
}

export default ContactContainer;
