import React, { Component } from 'react';
import Date from '../components/date/date';

class Mock extends Component {
    state = {
        mockDateObject: {
            dateStart: 'January 1997',
            dateEnd: 'Present'
        }
    }


    render() {
        return (
            <React.Fragment>
                <Date dateObject={this.state.mockDateObject}/>
            </React.Fragment>
        );
    }
}

export default Mock;