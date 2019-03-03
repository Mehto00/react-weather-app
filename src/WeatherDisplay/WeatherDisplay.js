import React from 'react';

const weatherDisplay = (props) => {
    return (
    <div className="results">        
        <h2>{props.city}</h2>
        <span className="temp">
            {props.temp}<span className="cUnit">&#8451;</span>
        </span>
        <br/>
        <span className="desc">
            <em>{props.desc}</em>
        </span>        
    </div>
    )
}

export default weatherDisplay;