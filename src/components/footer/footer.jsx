import React from 'react';
import './footer.scss';
import SiteButton from '../siteButton/siteButton';

const Footer = () => {
    return ( 
        <footer className="footer has-text-centered">
            <div>
                <SiteButton siteKey={'linkedin'} siteUrl={'https://www.linkedin.com/in/connor-fong/'} />
                <SiteButton siteKey={'github'} siteUrl={'https://www.linkedin.com/in/connor-fong/'} />
            </div>
            <br />
            <h1><b>Created by Connor Fong</b></h1>
            <br />
            <h2>2019</h2>
        </footer>
    );
}
 
export default Footer;