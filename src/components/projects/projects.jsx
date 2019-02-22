import React, { Component } from 'react';
import './projects.scss';
import Project from '../project/project';

class Projects extends Component {
    state = { 
        projects: [
            {
                projectTitle: 'Senti - Lumohacks 2018, Hackathon for Mental Health',
                dateObject: {
                    dateStart: 'September 2018',
                    dateEnd: ''
                },
                projectDescription: 'Senti is a Google Chrome Extension that utilizes computer vision technology to record the emotional impact of various websites. The app aims to promote a mentally-healthy browsing experience.',
                skills: [
                    'HTML', 'CSS', 'Javascript'
                ],
                githubLink: "/"
            },
            {},
            {},
            {},
            {},
            {},
            {}
        ]

    }

    render() { 
        return (  
            <section id="projects" className="section is-medium is-long">
                <div className="container is-fluid has-text-centered">
                    <h3>Projects</h3>
                    <h5>Here are some things that I've worked on.</h5>
                    {this.renderProjects()}
                    <a className="button is-rounded is-info" href="https://github.com/DConnorFong" target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i class="fab fa-lg fa-github"></i></span>
                        &nbsp;&nbsp;
                        See more on GitHub
                    </a>
                </div>
            </section>
        );
    }

    renderProjects() {
        return (
            <div className="columns is-multiline is-mobile">
                {this.state.projects.map(project => <div className="column is-12-mobile is-6-tablet is-4-widescreen"><Project /></div>)}
            </div>
        )
    }
}
 
export default Projects;