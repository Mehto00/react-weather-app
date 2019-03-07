import React from 'react';
import './WeatherDisplay.css';

const weatherDisplay = (props) => {
    return (

    <div className="weatherDisplay">
    <div className="weatherDisplay__animation">
    
    </div>
    <div className="weatherDisplay__content">
        <h2 className="weatherDisplay__content__header">{props.city}</h2>
        <span className="weatherDisplay__content__temp">
            {props.temp}<span className="weatherDisplay__content__cUnit">&#8451;</span>
        </span>
        <span className="weatherDisplay__content__desc">
            <em>{props.desc}</em>
        </span>
    </div>
    </div>
    )
}

export default weatherDisplay;