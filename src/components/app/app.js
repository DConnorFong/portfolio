import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Header from '../header/header';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

export default App;
