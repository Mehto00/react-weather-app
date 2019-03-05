import React from 'react';
import './WeatherDisplay.css';

const weatherDisplay = (props) => {
    return (
    <div className="weatherDisplay">        
        <h2>{props.city}</h2>
        <span className="weatherDisplay__temp">
            {props.temp}<span className="weatherDisplay__cUnit">&#8451;</span>
        </span>
        <br/>
        <span className="weatherDisplay__desc">
            <em>{props.desc}</em>
        </span>        
    </div>
    )
}

export default weatherDisplay;