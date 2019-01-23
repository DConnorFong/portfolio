import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.renderHeaderNav()}
                </div>
            </React.Fragment>
        );
    }

    renderHeaderNav() {
        return (
            <Link to={this.formatLinkNav()}>{this.props.nav}</Link>
        );
    }

    formatLinkNav() {
        if (this.props.nav === 'About')
            return '/';
        else 
            return '/' + this.props.nav.toLowerCase();
    }
}

export default App;
