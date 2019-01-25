import React, { Component } from 'react';
import Experience from '../components/experience/experience'

class ExperienceView extends Component {
    state = {  
        pni: {
            company: 'PNI Digital Media',
            title: 'Junior Developer (Co-op)',
            date: 'May 2018 - Present',
            description: 'PNI Digital Media is an enterprise e-commerce platform that provides print-on-demand applications to major retailers such as Costco, FedEx, Staples, and Sam\'s Club.',
            link: 'pni.jpg'
        },
        mindfulgarden: {
            company: 'Mindful Garden',
            title: 'Software Developer',
            date: 'May 2017 - January 2018',
            description: 'MindfulGarden is an interactive digital health platform that aims to de-escalate anxiety and aggression in hospitalized patients experiencing delirium and dementia.',
            link: 'mindful-garden.jpg'
        },
        launchpad: {
            company: 'UBC Launch Pad',
            title: 'Software Developer',
            date: 'September 2018 - Present',
            description: 'UBC Launch Pad is a student software engineering team. Sub teams comprising of designers and developers collaborate to build interesting applications in a professional environment.',
            link: 'launch-pad.png'
        },
        concretetoboggan: {
            company: 'UBC Concrete Toboggan',
            title: 'Electronic Team Lead',
            date: 'September 2017 - Present',
            description: 'UBC Concrete Toboggan is an engineering student design team that competes in the annual Great Northern Concrete Toboggan Race (GNCTR).',
            link: 'concrete-toboggan.jpg'
        }
    }

    render() { 
        return (
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-5 animated flipInX"><Experience experience={this.state.pni}/></div>
                    <div className="col-lg-5 animated flipInX delay-1s"><Experience experience={this.state.launchpad}/></div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-lg-5 animated flipInX delay-2s"><Experience experience={this.state.concretetoboggan}/></div>
                    <div className="col-lg-5 animated flipInX delay-3s"><Experience experience={this.state.mindfulgarden}/></div>
                </div>
            </div>
        );
    }
}
 
export default ExperienceView;