import React, { Component } from 'react';
import HeaderNav from './headerNav/headerNav';
import './header.scss';

class Header extends Component {
    state = {
        navs: [
            'About',
            'Skills',
            'Experience'
        ]
    };

    render() {
        return (
            <React.Fragment>
                <div id="site-header" className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1><b>Connor Fong</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Software Developer</h3>
                        </div>
                    </div>
                    <br />
                    {this.renderNavs()}
                    <br />
                </div>
            </React.Fragment>
        );
    }

    renderNavs() {
        if (this.state.navs.length === 0) 
            return <p>No navs provided</p>;
        else
            return <div className="row">{this.state.navs.map(nav => <div className="col-lg-4"><HeaderNav key={nav} nav={nav}/></div>)}</div>;
    }
}

export default Header;
