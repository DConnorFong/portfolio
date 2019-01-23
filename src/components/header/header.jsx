import React, { Component } from 'react';
import HeaderNav from './headerNav/headerNav';
import './header.scss';

class Header extends Component {
    state = {
        navs: [
            'About',
            'Skills',
            'Experience',
            'Contact'
        ]
    };

    render() {
        return (
            <React.Fragment>
                <div id="site-header" className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Connor Fong</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Software Developer</h3>
                        </div>
                    </div>
                    <br />
                    {this.renderNavs()}
                </div>
            </React.Fragment>
        );
    }

    renderNavs() {
        if (this.state.navs.length === 0) 
            return <p>No navs provided</p>;
        else
            return <div className="row">{this.state.navs.map(nav => <div className="col-lg-3"><HeaderNav key={nav} nav={nav}/></div>)}</div>;
    }
}

export default Header;
