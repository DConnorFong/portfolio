import React, { Component } from 'react';
import './projects.scss';
import Project from '../project/project';
import SiteLink from '../siteLink/siteLink';

class Projects extends Component {
    state = { 
        projects: [
            {
                projectTitle: 'Senti - Lumohacks 2018, Hackathon for Mental Health',
                dateObject: {
                    dateStart: 'September 2018',
                    dateEnd: ''
                },
                projectAward: 'Top 15',
                projectDescription: 'Senti is a Google Chrome Extension that utilizes computer vision technology to record the emotional impact of various websites. The app aims to promote a mentally-healthy browsing experience.',
                skills: [
                    'HTML', 'CSS', 'Javascript'
                ],
                githubLink: "/"
            },
            {
                projectTitle: 'sPARTYfy - nwHacks 2019, Western Canada\'s Largest Hackathon',
                dateObject: {
                    dateStart: 'January 2018',
                    dateEnd: ''
                },
                projectAward: 'Top 20',
                projectDescription: 'Senti is a Google Chrome Extension that utilizes computer vision technology to record the emotional impact of various websites. The app aims to promote a mentally-healthy browsing experience.',
                skills: [
                    'HTML', 'CSS', 'React', 'Bootstrap', 'Node.js'
                ],
                githubLink: "/"
            }
        ]

    }

    render() { 
        return (  
            <section id="projects" className="section is-long">
                <div className="container is-fluid has-text-centered">
                    <h3>Projects</h3>
                    <h5>Here are some things that I've worked on.</h5>
                    {this.renderProjects()}
                    <SiteLink siteKey={'github'} siteUrl={'https://github.com/DConnorFong'} siteText={'See more on GitHub'} />
                </div>
            </section>
        );
    }

    renderProjects() {
        return (
            <div className="columns is-multiline is-mobile">
                {this.state.projects.map(project => <div className="column is-12-mobile is-6-tablet is-4-widescreen"><Project project={project}/></div>)}
            </div>
        )
    }
}
 
export default Projects;