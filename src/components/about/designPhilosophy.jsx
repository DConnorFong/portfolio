import React, { Component } from 'react';
import './designPhilosophy.scss'

const DesignPhilosophy = () => {
    return (
        <div id="site-philosophy" className="container">
            <span class="site-heading animated fadeIn"><h3>Design Philosophy</h3></span>
            <div className="row">
                <div className="col-lg-4 site-philosophy-item animated fadeInUp delay-1s">
                    <i class="fas fa-pencil-ruler site-icon-big"></i>
                    <h5>Design with a Purpose</h5>
                </div>
                <div className="col-lg-4 site-philosophy-item animated fadeInUp delay-2s">
                    <i class="far fa-comments site-icon-big"></i>
                    <h5>Plan, Plan, Plan</h5>
                </div>
                <div className="col-lg-4 site-philosophy-item animated fadeInUp delay-3s">
                    <i class="fas fa-basketball-ball site-icon-big"></i>
                    <h5>Have Fun With It</h5>
                </div>
            </div>
        </div>
    );
};

export default DesignPhilosophy;