import React from 'react';
import './about.scss';

const About = () => {
    return (
        <section id="about" className="section is-medium is-long">
            <div className="container has-text-centered">
                {/*<img src={require('../../assets/about.jpg')} alt={'Connor Fong headshot'} />*/}
                <div className="columns">
                    <div className="column is-half is-full-mobile">
                        <h3>Hey there, I'm Connor. Nice to meet you!</h3>
                    </div>
                    <div className="column is-half is-full-mobile">
                        <p>
                        I am a computer engineering student at the University of British Columbia.
                        I enjoy designing software that is elegantly simple for both the user and maintainer.                 
                        </p>
                    </div>
                </div>
                <br />
                <h3>At a Glance</h3>
                <br />
                <div className="columns">
                    <div className="column is-third is-full-mobile">
                        <h4>Web</h4>
                        <span className="icon"><i className="fas fa-globe-americas"></i></span>
                        <p>ReactJS, NodeJS, .NET</p>
                    </div>
                    <div className="column is-third is-full-mobile">
                        <h4>OOP</h4>
                        <span className="icon"><i className="fas fa-code"></i></span>
                        <p>Java, C/C++, C#</p>
                    </div>
                    <div className="column is-third is-full-mobile">
                        <h4>Games</h4>
                        <span className="icon"><i className="fas fa-gamepad"></i></span>
                        <p>Unity Engine</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default About;