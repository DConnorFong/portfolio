import React from 'react';
import './siteButton.scss';

const SiteButton = (props) => {
/*
 *  Prop Arguments:
 *  siteKey:    string | (github, linkedin)
 *  siteUrl:    string
 */ 

    return (  
        <span className="site-button">
            <a className={`site-button button is-rounded`} href={props.siteUrl} target="_blank" rel="noopener noreferrer">
                <span class="icon"><i class={`fab fa-lg fa-${props.siteKey}`}></i></span>
            </a>
        </span>
    );
}
 
export default SiteButton;