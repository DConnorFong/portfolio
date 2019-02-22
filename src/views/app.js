import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'animate.css/animate.min.css'
import './app.scss';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Project from '../components/project/project';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <About />
                <div className="container experience">
                    <h1>Experience</h1>
                </div>
                <Projects />
                <div className="container contact">
                    <h1>Contact</h1>
                </div>
                <footer className="footer">
                    <h1>Footer</h1>
                </footer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Project />
            </React.Fragment>
        );
    }
}

export default App;