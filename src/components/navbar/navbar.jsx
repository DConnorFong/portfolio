import React from 'react';
import './navbar.scss'

const Navbar = () => {
    return (  
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#">CF</a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a href="#about">About</a>
                    <a href="#">Experience</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;