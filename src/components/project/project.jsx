import React, { Component } from 'react';
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
                <div className="card-content">
                    <h5>{this.state.projectTitle}</h5>
                </div>
            )
        else
            return null
    }
}
 
export default Project;