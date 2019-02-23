import React from 'react';

const Date = (props) => {
    return (  
        <div className="date">
            <h6>{props.dateObject.dateStart}{props.dateObject.dateEnd === '' ? '' : ` - ${props.dateObject.dateEnd}`}</h6>
        </div>
    );
}
 
export default Date;