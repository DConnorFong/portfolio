import React from 'react';
import './footer.scss';
import SiteButton from '../siteButton/siteButton';

const Footer = () => {
    return ( 
        <footer className="footer has-text-centered">
            <div>
                <SiteButton siteIcon={'fab fa-github'} siteUrl={'https://github.com/DConnorFong'} />
                <SiteButton siteIcon={'fab fa-linkedin-in'} siteUrl={'https://www.linkedin.com/in/connor-fong'} />
                <SiteButton siteIcon={'fas fa-desktop'} siteUrl={'https://dconnorfong.com'} />
            </div>
            <hr />
            <br />
            <h1><b>Created by Connor Fong</b></h1>
            <h2>2019</h2>
        </footer>
    );
}
 
export default Footer;