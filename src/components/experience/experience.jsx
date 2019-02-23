import React, { Component } from 'react';
import Date from '../date/date';
import './experience.scss'

class Experience extends Component {
/*  
 *  companyTitle (string), jobTitle (string), a date-component [dateStart (string), dateEnd(string)], and a skills-component
 * 
 *  imageURL image path based on the assets folder 
 *
 */    
    state = { 
        /*
        companyTitle: this.props.experienceObject.companyTitle,
        jobTitle: this.props.experienceObject.jobTitle,
        imageUrl: this.props.experienceObject.imageUrl,
        dateObject: this.props.experienceObject.dateObject,
        description: this.props.experienceObject.description,
        skillList: this.props.experienceObject.skillList
        */
        companyTitle: 'PNI Digital Media',
        jobTitle: 'Junior Developer (Co-op)',
        imageUrl: 'pni.jpg',
        companyDescription: 'PNI Digital Media is an enterprise e-commerce platform that provides print-on-demand applications to major retailers such as Costco, FedEx, Staples, and Sam\'s Club. ',
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
    }

    render() { 
        return (
            <div className="card experience">
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-4">
                            <img src={require(`../../assets/${this.state.imageUrl}`)} alt={`A ${this.state.companyTitle} logo`} />
                        </div>
                        <div className="column is-8">
                            <div className="flex">
                                <h4>{this.state.companyTitle}</h4>
                                <h6>{this.state.jobTitle}</h6>
                            </div>
                        </div>
                    </div>
                    <p>{this.state.companyDescription}</p>
                    <br/>
                    {this.renderJobDescriptions(this.state.jobDescriptions)}
                    <Date dateObject={this.state.dateObject} />
                </div>
            </div>
        )
    }

    renderJobDescriptions(jobDescriptions) {
        return (
            <React.Fragment>
                {jobDescriptions.map(jobDescription => 
                    <div className="job-description">
                        <p>
                            <span className="icon"><i className={jobDescription.icon}></i></span>&nbsp;<b>{jobDescription.summary}:</b>
                        </p>
                        <p>
                            {jobDescription.description}
                        </p>
                        <br />  
                    </div>
                )}
            </React.Fragment>
        )
    }
}
 
export default Experience;