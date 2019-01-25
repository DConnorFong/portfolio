import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import './skill.scss';

class Skill extends Component {
    state = { 
        title: this.props.skill.skillTitle,
        ranking: this.props.skill.skillScore
    };

    render() { 
        return (
            <React.Fragment> 
                <span className="site-skill"><h5>{this.state.title}</h5></span>
                <Progress 
                    percent={this.state.ranking}
                    theme={{
                        active: {
                          color: '#2bbbad'
                        }
                      }}
                />
                <br />
            </React.Fragment>
        );
    }

    calculatePercentage() {
        return this.props.skillScore / 5;
    }
}

export default Skill;