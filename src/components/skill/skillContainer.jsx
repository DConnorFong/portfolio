import React, { Component } from 'react';
import Skill from './skill';
import './skillContainer.scss';

class SkillContainer extends Component {
    state = {
        skillTitle: this.props.skillSection.title,
        skillList: this.props.skillSection.skillList
    };

    render() { 
        return (
            <React.Fragment>
                <div className="container site-skill-container">
                    <span class="site-heading"><h3>{this.state.skillTitle}</h3></span>
                    {this.renderSkill()}
                </div>
            </React.Fragment>
        );
    }

    renderSkill() {
        return <div className="row">{this.state.skillList.map(skill => <div className="col-lg-6 col-sm-6 col-xs-12"><Skill skill={skill}/></div>)}</div>;
    }
}

export default SkillContainer;
