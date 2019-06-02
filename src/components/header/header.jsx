import React from 'react';
import './header.scss';

const Header = () => {
    return (  
        <section id="header" className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <img src={require('../../assets/about.jpg')} alt={'Connor Fong headshot'} />
                        </div>
                        <div className="column">
                            <h1 className="title">Connor Fong</h1>
                            <h3 className="subtitle">Software Engineer - Vancouver / Bay Area</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Header;
