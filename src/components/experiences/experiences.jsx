import React, { Component } from 'react';
import Experience from '../experience/experience';
import SiteLink from '../siteLink/siteLink';
import './experiences.scss';

class Experiences extends Component {
    state = { 
        experienceObjects: [ 
            {
                companyTitle: 'Launch Pad',
                jobTitle: 'Lead Developer',
                imageUrl: 'launch-pad.png',
                companyDescription: 'UBC Launch Pad is a student software design team. Sub-teams comprising of designers and developers collaborate to build interesting applications in a professional environment.',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-server',
                        summary: 'Full-Stack Development',
                        description: 'Developed a ReactJS and NodeJS internship web application to allow students to find a large volume of workplace opportunities quickly'
                    },
                    {
                        icon: 'fas fa-running',
                        summary: 'AGILE',
                        description: 'Designing sprints and delegating tickets to ensure that the project followed tangible and achievable deadlines'
                    }
                ],
                dateObject: {
                    dateStart: 'September 2019', 
                    dateEnd: 'Present'
                }
            },
            {
                companyTitle: 'Amazon',
                jobTitle: 'Software Engineer Intern',
                imageUrl: 'amazon.png',
                companyDescription: 'Amazon is a multinational technology company with a focus on e-commerce and cloud computing.',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-leaf',
                        summary: 'Sustainability',
                        description: 'Engineered tools and features for large scale software systems relating to Amazon’s environmental sustainability initiatives'
                    },
                    {
                        icon: 'fas fa-rocket',
                        summary: 'Prototyping Technology',
                        description: 'Designed prototype technology to explore viability in newer high-performance areas of software engineering'
                    }
                ],
                dateObject: {
                    dateStart: 'May 2020', 
                    dateEnd: 'August 2020'
                }
            },
            {
                companyTitle: 'Xperiel',
                jobTitle: 'Software Engineer Intern',
                imageUrl: 'xperiel.png',
                companyDescription: 'Xperiel is an internet of things and augmented reality platform that brings immersive cloud-based applications to clients such as PepsiCo, Sacramento Kings, and New York Jets.',
                jobDescriptions: [
                    {
                        icon: 'fas fa-exclamation-triangle',
                        summary: 'Testing Frameworks',
                        description: 'Developed a new device testing framework to simplify test writing and optimize error detection'
                    },
                    {
                        icon: 'fas fa-tachometer-alt',
                        summary: 'Web Dashboard',
                        description: 'Added functionality to a user dashboard to provide clients with more insight on their applications'
                    }
                ],
                dateObject: {
                    dateStart: 'May 2019', 
                    dateEnd: 'August 2019'
                }
            },
            {
                companyTitle: 'PNI Digital Media',
                jobTitle: 'Junior Developer (Co-op)',
                imageUrl: 'pni.jpg',
                companyDescription: 'PNI Digital Media is an enterprise e-commerce platform that provides print-on-demand applications to major retailers such as Costco, FedEx, Staples, and Sam\'s Club.',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-cogs',
                        summary: 'Operations Development',
                        description: 'Ensured that online services were constantly available for 60 million active users'
                    },
                    {
                        icon: 'fas fa-tools',
                        summary: 'Refactoring Static Content',
                        description: 'Utilized SQL stored-procedures to eliminate 5-10 hours of manual development/testing per week'
                    }
                ],
                dateObject: {
                    dateStart: 'May 2018', 
                    dateEnd: 'May 2019'
                }
            },
            {
                companyTitle: 'Concrete Toboggan',
                jobTitle: 'Electronic Team Lead',
                imageUrl: 'concrete-toboggan.png',
                companyDescription: 'UBC Concrete Toboggan is an student engineering design team that competes in the annual Great Northern Concrete Toboggan Race (GNCTR).',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-tasks',
                        summary: 'Team Management',
                        description: 'Organized meetings and assigned tasks to team members '
                    },
                    {
                        icon: 'fas fa-car-battery',
                        summary: 'Circuit Design & Programming',
                        description: 'Designed a sensor data-logging system to capture force, and acceleration metrics'
                    }
                ],
                dateObject: {
                    dateStart: 'September 2017', 
                    dateEnd: 'Present'
                }
            },
            {
                companyTitle: 'Mindful Garden',
                jobTitle: 'Software Developer',
                imageUrl: 'mindful-garden.jpg',
                companyDescription: 'MindfulGarden is an interactive digital health platform that aims to de-escalate anxiety and aggression in hospitalized patients experiencing delirium and dementia.',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-pen-square',
                        summary: 'Proof of Concept',
                        description: 'Rapidly developed application software and user interfaces for clinical testing and investor demos'
                    },
                    {
                        icon: 'far fa-map',
                        summary: 'Roadmapping',
                        description: 'Provided input on product timelines to ensure that development aligned with company needs and responsibilities'
                    }
                ],
                dateObject: {
                    dateStart: 'May 2017', 
                    dateEnd: 'January 2018'
                }
            }
        ]
    }
    render() { 
        return ( 
            <section id="experiences" className="section is-long">
                <div className="container is-fluid has-text-centered">
                    <h3>Experience</h3>
                    <h5>These are positions I have held in Software and Engineering.</h5>
                    {this.renderExperience(this.state.experienceObjects)}
                    <SiteLink siteKey={'linkedin'} siteUrl={'https://www.linkedin.com/in/connor-fong/'} siteText={'More info on LinkedIn'} />
                </div>
            </section>
        );
    }

    renderExperience(experienceObjects) {
        return (
            <React.Fragment>
                <div id="desktop-timeline">
                    <div className="timeline is-centered">
                        {experienceObjects.map(experienceObject => 
                            <div className="timeline-item is-white">
                                <div className="timeline-marker is-white is-icon"></div>
                                <div className="timeline-content">
                                    <Experience experienceObject={experienceObject} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div id="mobile-timeline">
                    <div className="timeline">
                        {experienceObjects.map(experienceObject => 
                            <div className="timeline-item s-white">
                                <div className="timeline-marker is-white is-icon"></div>
                                <div className="timeline-content">
                                    <Experience experienceObject={experienceObject} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
 
export default Experiences;