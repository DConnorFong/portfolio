import React from 'react';
import './siteLink.scss';

const SiteLink = (props) => {
/*
 *  Prop Arguments:
 *  siteKey:    string | (github, linkedin)
 *  siteUrl:    string
 *  siteText:   string
 */ 

    return (  
        <a className={`site-link button is-rounded ${props.siteKey}`} href={props.siteUrl} target="_blank" rel="noopener noreferrer">
            <span class="icon"><i class={`fab fa-lg fa-${props.siteKey}`}></i></span>
            &nbsp;&nbsp;
            {props.siteText}
        </a>
    );
}
 
export default SiteLink;