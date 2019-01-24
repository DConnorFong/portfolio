import React, { Component } from 'react';
import About from '../components/about/about';
import DesignPhilosophy from '../components/about/designPhilosophy';

class AboutView extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <About />
                <DesignPhilosophy />
            </div>
        );
    }
}
 
export default AboutView;