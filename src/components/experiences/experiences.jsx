import React, { Component } from 'react';
import Experience from '../experience/experience';
import SiteLink from '../siteLink/siteLink';
import './experiences.scss';

class Experiences extends Component {
    state = { 
        experienceObjects: [ 
            {
                companyTitle: 'Xperiel',
                jobTitle: 'Software Engineer (Co-op)',
                imageUrl: 'xperiel.png',
                companyDescription: 'Xperiel is an IoT networking platform that allows businesses to create seamless and engaging customer experiences.',
                jobDescriptions: [],
                dateObject: {
                    dateStart: 'Incoming May 2019', 
                    dateEnd: ''
                }
            },
            {
                companyTitle: 'Launch Pad',
                jobTitle: 'Software Developer',
                imageUrl: 'launch-pad-2.png',
                companyDescription: 'UBC Launch Pad is a student software engineering team. Sub teams comprising of designers and developers collaborate to build interesting applications in a professional environment.',
                jobDescriptions: [
                    { 
                        icon: 'fas fa-server',
                        summary: 'Full-Stack Development',
                        description: 'Ensured that online services were constantly available for 60 million active users'
                    },
                    {
                        icon: 'far fa-map',
                        summary: 'AGILE Navigation',
                        description: 'Designing sprints and delegating tickets to ensure that the project followed tangible and achievable deadlines'
                    }
                ],
                dateObject: {
                    dateStart: 'September 2018', 
                    dateEnd: 'Present'
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
                    dateEnd: 'April 2019'
                }
            },
            {
                companyTitle: 'Concrete Toboggan',
                jobTitle: 'Electronic Team Lead',
                imageUrl: 'concrete-toboggan.png',
                companyDescription: 'PNI Digital Media is an enterprise e-commerce platform that provides print-on-demand applications to major retailers such as Costco, FedEx, Staples, and Sam\'s Club.',
                jobDescriptions: [
                    { 
                        icon: 'fab fa-cogs',
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
                    dateStart: 'September 2017', 
                    dateEnd: 'Present'
                }
            },
            {
                companyTitle: 'Mindful Garden',
                jobTitle: 'Software Developer',
                imageUrl: 'mindful-garden.jpg',
                companyDescription: 'PNI Digital Media is an enterprise e-commerce platform that provides print-on-demand applications to major retailers such as Costco, FedEx, Staples, and Sam\'s Club.',
                jobDescriptions: [
                    { 
                        icon: 'fab fa-cogs',
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
                            <div class="timeline-item is-info">
                                <div class="timeline-marker is-info is-icon"></div>
                                <div class="timeline-content">
                                    <Experience experienceObject={experienceObject} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div id="mobile-timeline">
                    <div className="timeline">
                        {experienceObjects.map(experienceObject => 
                            <div class="timeline-item is-info">
                                <div class="timeline-marker is-info is-icon"></div>
                                <div class="timeline-content">
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