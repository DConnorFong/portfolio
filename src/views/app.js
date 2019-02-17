import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'animate.css/animate.min.css'
import './app.scss';
import 'bulma/css/bulma.min.css';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <div id="about" className="container">
                    <h1>About/Skills</h1>
                </div>
                <div className="container experience">
                    <h1>Experience</h1>
                </div>
                <div className="container projects">
                    <h1>Projects</h1>
                </div>
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
            </React.Fragment>
        );
    }
}

export default App;
