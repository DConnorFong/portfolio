import React from 'react';
import './header.scss';

const Header = () => {
    return (  
        <section id="header" className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    {/*
                    <div className="columns">
                        <div className="column is-third is-full-mobile">
                            <img src={require('../../assets/about.jpg')} alt={'Connor Fong headshot'} />
                        </div>
                        <div className="column is-two-thirds is-full-mobile">
                            <h1 className="title">Connor Fong</h1>
                            <h3 className="subtitle">Software Engineer - Vancouver / Bay Area</h3>
                        </div>
                    </div>
                    */}
                    <h1 className="title">Connor Fong</h1>
                    <img src={require('../../assets/about.jpg')} alt={'Connor Fong headshot'} />
                    <h2>Software Engineer</h2>
                    <h3>San Francisco Bay Area</h3>
                </div>
            </div>
        </section>
    );
}
 
export default Header;
