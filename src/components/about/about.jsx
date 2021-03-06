import React from 'react';
import './about.scss';
import './chat.scss';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container has-text-centered">
                <h1>Hey there!</h1>
                <h2>My name is Connor.</h2>
                <br />
                <div className="columns">
                    <div className="chat">
                        <div className="chat-bubble me">
                            <p>Nice to meet you.</p>
                        </div>
                        <br />
                        <br />
                        <div className="chat-bubble them">
                            <p>Please tell me a bit about yourself.</p>   
                        </div>  
                        <br />
                        <br />
                        <div className="chat-bubble me">
                            <p>
                                I am a computer engineering student at the University of British Columbia.
                                I enjoy designing software that is elegantly simple for both the user and maintainer.  
                            </p>   
                        </div>      
                        <br />
                        <p className="chat-delivered">Delivered</p>          
                    </div>
                </div>
                <br />
                <div className="columns">
                    <div className="column is-third is-full-mobile">
                        <div className="card frameworks">
                            <span className="icon"><i className="fas fa-crop"></i></span>
                            <h3>Frameworks</h3>
                            <hr />
                            <p>Bootstrap</p>
                            <p>Bulma</p>
                            <p>ReactJS</p>
                            <p>NodeJS + Express</p>
                            <p>.NET</p>
                            <p>Sequelize</p>
                            <p>Unity Engine</p>
                        </div>
                    </div>
                    <div className="column is-third is-full-mobile">
                        <div className="card languages">
                            <span className="icon"><i className="fas fa-laptop-code"></i></span>
                            <h3>Languages</h3>
                            <hr />
                            <p>HTML</p>
                            <p>CSS/Sass</p>
                            <p>Java</p>
                            <p>JavaScript</p>
                            <p>C/C++</p>
                            <p>C#</p>
                            <p>SQL/NoSQL</p>
                        </div>
                    </div>
                    <div className="column is-third is-full-mobile">
                        <div className="card tools">
                            <span className="icon"><i className="fas fa-wrench"></i></span>
                            <h3>Tools</h3>
                            <hr />
                            <p>Docker</p>
                            <p>Robo3T</p>
                            <p>Postman</p>
                            <p>Git</p>
                            <p>Bazel</p>
                            <p>JUnit</p>
                            <p>Travis CI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;