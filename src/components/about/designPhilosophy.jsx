import React, { Component } from 'react';
import './about.scss';

const DesignPhilosophy = () => {
    return (
        <div id="site-philosophy" className="container">
            <span class="site-heading"><h3>Design Philosophy</h3></span>
            <div className="row">
                <div className="col-lg-4 site-philosophy-item">
                    <h5>Design with a Purpose</h5>
                </div>
                <div className="col-lg-4 site-philosophy-item">
                    <h5>Plan, Plan, Plan</h5>
                </div>
                <div className="col-lg-4 site-philosophy-item">
                    <h5>Have Fun With It</h5>
                </div>
            </div>
        </div>
    );
};

export default DesignPhilosophy;