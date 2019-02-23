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
                <div className="card-content">
                    {this.renderProject()}
                </div>
            </div>    
        );
    }

    renderProject() {
        if (this.state.hover)
            return (
                <h1>Is Hovered</h1>
            )
        else
            return (
                <h1>Is NOT Hovered</h1>
            )
    }
}
 
export default Project;