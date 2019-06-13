import React from 'react';
import './siteButton.scss';

const SiteButton = (props) => {
/*
 *  Prop Arguments:
*   siteIcon:   string | (fab fa-github, fab fa-linkedin)
 *  siteUrl:    string
 */ 

    return (  
        <span className="site-button">
            <a className="button is-rounded" href={props.siteUrl} target="_blank" rel="noopener noreferrer">
                <span class="icon"><i class={`fa-lg ${props.siteIcon}`}></i></span>
            </a>
        </span>
    );
}
 
export default SiteButton;