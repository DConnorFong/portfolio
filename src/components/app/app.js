import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Header from '../header/header';

const aboutRoute = () => {
    return (
        <p>About Route</p>
    );
}

const skillsRoute = () => {
    return (
        <p>Skills Route</p>
    );
}

const experienceRoute = () => {
    return (
        <p>Experience Route</p>
    );
}

const contactRoute = () => {
    return (
        <p>Contact Route</p>
    );
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Switch>
                            <Route path="/" component={ aboutRoute } exact />
                            <Route path="/skills" component={ skillsRoute }/> 
                            <Route path="/experience" component={ experienceRoute }/> 
                            <Route path="/contact" component={ contactRoute }/>
                            <Route component={ aboutRoute } />
                        </Switch>
                    </div> 
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
