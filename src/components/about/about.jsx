import React, { Component } from 'react';
import DesignPhilosophy from './designPhilosophy';
import './about.scss';

const About = () => {
    return (
        <div id="site-about" className="container animated fadeIn">
            <span class="site-heading"><h3>Hey there!</h3></span>
            <p>
                My name is Connor Fong. I am currently a <span class="site-highlight">Computer&nbsp;Engineering</span> student at the <span class="site-highlight">University&nbsp;of&nbsp;British&nbsp;Columbia </span> 
                as well as a <span class="site-highlight">Software&nbsp;Development&nbsp;Co-op</span> at <span class="site-highlight">PNI&nbsp;Digital&nbsp;Media</span>.
                I specialize in <span class="site-highlight">Full-Stack&nbsp;Web&nbsp;Development</span> and strive to create excellent software and memorable applications every day.
            </p>
            <br />
        </div>
    );
};

export default About;