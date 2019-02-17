import React from 'react';

const Date = (props) => {
    return (  
        <div className="date">
            <h3>{props.dateObject.dateStart} - {props.dateObject.dateEnd}</h3>
        </div>
    );
}
 
export default Date;