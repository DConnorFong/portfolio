import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Header from '../components/header/header';
import AboutView from '../views/aboutView';
import SkillsView from '../views/skillsView';
import ExperienceView from '../views/experienceView';
import ContactView from '../views/contactView';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Switch>
                            <Route path="/" component={ AboutView } exact />
                            <Route path="/skills" component={ SkillsView }/> 
                            <Route path="/experience" component={ ExperienceView }/> 
                            <Route path="/contact" component={ ContactView }/>
                            <Route component={ AboutView } />
                        </Switch>
                    </div> 
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
