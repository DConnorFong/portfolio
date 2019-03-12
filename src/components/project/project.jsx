import React, { Component } from 'react';
import Date from '../date/date';
import GithubLink from '../githubLink/githubLink';
import './project.scss';

class Project extends Component {
    state = {  
        hover: false,
        projectTitle: this.props.project.projectTitle,
        dateObject: this.props.project.dateObject,
        projectAward: this.props.project.projectAward,
        projectDescription: this.props.project.projectDescription,
        skills: this.props.project.skills,
        githubLink: this.props.project.githubLink
    }

    handleMouseEnter = () => {
        this.setState({hover: true});
    }

    handleMouseLeave = () => {
        this.setState({hover: false});
    }

    render() { 
        return ( 
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="card project">
                {this.renderProject()}
            </div>    
        );
    }

    renderProject() {
        if (this.state.hover)
            return (
                <React.Fragment>
                    <div className="card-content">
                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <p>{this.state.projectTitle}</p>
                            </div>
                            <div className="column is-2">
                                <p>Test</p>
                            </div>
                        </div>
                        <p>{this.state.projectDescription}</p>
                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <p>{this.state.projectTitle}</p>
                            </div>
                            <div className="column is-2">
                                <p>Test</p>
                            </div>
                        </div>
                    </div>
               </React.Fragment>
            )
        else
            return (
                <React.Fragment>
                    <div className="card-content">
                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <h6>{this.state.projectTitle}</h6>
                            </div>
                            <div className="column is-2">
                                <h6>Test</h6>
                            </div>
                        </div>
                        <p>{this.state.projectDescription}</p>
                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <h6>{this.state.projectTitle}</h6>
                            </div>
                            <div className="column is-2">
                                <h6>Test</h6>
                            </div>
                        </div>
                    </div>
               </React.Fragment>
            )
    }
}
 
export default Project;