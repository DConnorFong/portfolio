import React, { Component } from 'react';
import './contact.scss'

class Contact extends Component {
    state = { 
        // icon must be formatted for HTML
        icon: this.props.contact.icon.replace('\'', '"'),
        title: this.props.contact.title,
        value: this.props.contact.value,
        link: this.props.contact.link
    };

    render() { 
        return (
            <React.Fragment> 
                <div className="container site-contact">
                    <div className="row">
                        <a href={this.state.link} target="_blank" rel="noopener noreferrer">
                            {this.renderIcon()} 
                            <p>{this.state.value}</p>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderIcon() {
        if (this.state.icon === '') {
            return;
        }
        else {
            return <i className={this.state.icon}></i>;
        }
    }
}

export default Contact;
