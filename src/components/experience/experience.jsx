import React, { Component } from 'react';
import './experience.scss'

class Experience extends Component {
/*  
 *  companyTitle (string), jobTitle (string), a date-component [dateStart (string), dateEnd(string)], and a skills-component
 * 
 *  imageURL image path based on the assets folder 
 *
 */    
    state = { 
        companyTitle: this.props.experienceObject.companyTitle,
        jobTitle: this.props.experienceObject.jobTitle,
        imageUrl: this.props.experienceObject.imageUrl,
        dateObject: this.props.experienceObject.dateObject,
        description: this.props.experienceObject.description,
        skillList: this.props.experienceObject.skillList
    }

    render() { 
        return (
            <div className="experience">
                <img src={this.formatImageLink(this.state.imageUrl)} alt={this.state.companyTitle} />
                <h3>{this.state.companyTitle}</h3>
                <h4>{this.state.jobTitle}</h4>
                {/* <date dateObject={this.state.dateObject} /> */}
                <p>{this.state.description}</p>
                {/* <bubbleSkillList skillList={this.state.skillList} /> */}
            </div>
        )
    }

    formatImageLink(assetUrl) {
        return "../../assets/" + assetUrl;
    }
}
 
export default Experience;