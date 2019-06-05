import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'animate.css/animate.min.css'
import './app.scss';
import 'bulma/css/bulma.min.css';
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import About from '../components/about/about';
import Experiences from '../components/experiences/experiences';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Navbar />*/}
                <Header />
                <About />
                <Experiences />
                <Projects />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;