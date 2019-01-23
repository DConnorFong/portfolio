import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h5>{this.props.nav}</h5>
                </div>
            </React.Fragment>
        );
    }
}

export default App;