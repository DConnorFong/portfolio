import React, { Component } from 'react';
import Date from '../date/date';
import SiteButton from '../siteButton/siteButton';
import './project.scss';

class Project extends Component {
    state = {  
        id: this.props.project.id,
        projectTitle: this.props.project.projectTitle,
        dateObject: this.props.project.dateObject,
        projectAward: this.props.project.projectAward,
        projectDescription: this.props.project.projectDescription,
        skills: this.props.project.skills,
        githubLink: this.props.project.githubLink
    }

    render() { 
        return ( 
            <div className="project">
                <div id={this.state.id} className="card">
                    <div className="card-content">
                        <h1>{this.state.projectTitle}</h1>
                        <p>{this.state.projectDescription}</p>
                            <div className="project-footer">
                                <span className="project-date"><Date dateObject={this.state.dateObject} /></span>
                                <SiteButton siteIcon={'fas fa-code'} siteUrl={this.state.githubLink} />
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Project;