import React, { Component } from 'react';
import SkillContainer from '../components/skill/skillContainer'

class SkillsView extends Component {
    state = {
        skillSections: [
            {
                key: 1,
                title: 'Languages',
                skillList: [
                    {
                        skillTitle: 'HTML',
                        skillScore: 90,
                    },
                    {
                        skillTitle: 'CSS',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Javascript',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Java',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'C#',
                        skillScore: 70,
                    },
                    {
                        skillTitle: 'C/C++',
                        skillScore: 30,
                    },
                    {
                        skillTitle: 'Go',
                        skillScore: 30,
                    },
                    {
                        skillTitle: 'SQL',
                        skillScore: 60,
                    }
                ]
            },
            {
                key: 1,
                title: 'Frameworks',
                skillList: [
                    {
                        skillTitle: 'React',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Angular',
                        skillScore: 60,
                    },
                    {
                        skillTitle: 'ASP.NET MVC',
                        skillScore: 60,
                    },
                    {
                        skillTitle: 'Bootstrap',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Express',
                        skillScore: 40,
                    },
                    {
                        skillTitle: 'Unity',
                        skillScore: 60,
                    }
                ]
            },
            {
                key: 1,
                title: 'Development Tools',
                skillList: [
                    {
                        skillTitle: 'Git',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Visual Studio, VS Code',
                        skillScore: 80,
                    },
                    {
                        skillTitle: 'Unity Editor',
                        skillScore: 60,
                    },
                    {
                        skillTitle: 'NPM',
                        skillScore: 60,
                    },
                    {
                        skillTitle: 'Gulp',
                        skillScore: 40,
                    },
                    {
                        skillTitle: 'Travis CI',
                        skillScore: 50,
                    }
                ]
            },
            {
                key: 1,
                title: 'Soft Skills',
                skillList: [
                    {
                        skillTitle: 'AGILE Development',
                        skillScore: 80
                    },
                    {
                        skillTitle: 'Leadership',
                        skillScore: 80
                    },
                    {
                        skillTitle: 'Teamwork',
                        skillScore: 80
                    },
                    {
                        skillTitle: 'Communication',
                        skillScore: 80
                    },
                    {
                        skillTitle: 'Start-up Development Workflow',
                        skillScore: 70
                    },
                    {
                        skillTitle: 'Enterprise Development Workflow',
                        skillScore: 70
                    }
                ]
            }
        ]
    };

    render() { 
        return (
            <div className="container">
                {this.renderSkill()}
            </div>
        );
    }

    renderSkill() {
        return <div className="row">{this.state.skillSections.map(skillSection => <div className="col-lg-6"><SkillContainer key={skillSection.key} skillSection={skillSection}/></div>)}</div>;
    }
}
 
export default SkillsView;