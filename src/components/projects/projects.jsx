import React, { Component } from 'react';
import './projects.scss';
import Project from '../project/project';
import SiteLink from '../siteLink/siteLink';

class Projects extends Component {
    state = { 
        projects: [
            {
                id: 'portfolio-website',
                projectTitle: 'Portfolio Website',
                dateObject: {
                    dateStart: 'June 2019',
                    dateEnd: ''
                },
                projectDescription: 'Welcome to my portfolio website.',
                githubLink: "https://github.com/DConnorFong/portfolio"
            },
            {
                id: 'internado',
                projectTitle: 'Internado',
                dateObject: {
                    dateStart: 'April 2019',
                    dateEnd: ''
                },
                projectAward: 'Top 15',
                projectDescription: "Internado is a free service that aims to find personalized internship opportunities based on a student's skills and interests.",
                githubLink: "https://github.com/ubclaunchpad/Internado"
            },
            {
                id: 'spartyfy',
                projectTitle: 'sPARTYfy',
                dateObject: {
                    dateStart: 'January 2019',
                    dateEnd: ''
                },
                projectAward: 'Top 20',
                projectDescription: 'sPARTYfy is a Spotify application that allows users to collectively compete for likes through song suggestions.',
                skills: [
                    'HTML', 'CSS', 'React', 'Bootstrap', 'Node.js'
                ],
                githubLink: "https://github.com/DConnorFong/spartyfy"
            },
            {
                id: 'senti', 
                projectTitle: 'Senti',
                dateObject: {
                    dateStart: 'September 2018',
                    dateEnd: ''
                },
                projectAward: 'Top 15',
                projectDescription: 'Senti is a Google Chrome Extension that utilizes computer vision technology to record the emotional impact of various websites. The app aims to promote a mentally-healthy browsing experience.',
                githubLink: "https://github.com/DConnorFong/Senti"
            },
            {
                id: 'yelp-clone', 
                projectTitle: 'Yelp Clone',
                dateObject: {
                    dateStart: 'December 2017',
                    dateEnd: ''
                },
                projectAward: 'Top 15',
                projectDescription: 'A Yelp-clone database and server application that allows for multiple users to simultaneously access, write to, and query extensive restaurant data.',
                githubLink: "https://github.com/DConnorFong/YelpDatabase"
            },
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
            <div className="project-content columns is-multiline is-mobile">
                {this.state.projects.map(project => <div className="column is-12-mobile is-6-tablet is-4-widescreen"><Project project={project}/></div>)}
            </div>
        )
    }
}
 
export default Projects;