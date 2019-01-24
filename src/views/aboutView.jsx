import React, { Component } from 'react';
import About from '../components/about/about';
import DesignPhilosophy from '../components/about/designPhilosophy';

class AboutView extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <About />
                <DesignPhilosophy />
            </React.Fragment>
        );
    }
}
 
export default AboutView;