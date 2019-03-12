import React from 'react';
import './WeatherDisplay.css';



const weatherDisplay = (props) => {

    return (

    <div className="weatherDisplay">
    <div className="weatherDisplay_wrapper">
        <div className="weatherDisplay__contentbox"> 
            <h2 className="weatherDisplay__contentbox__header">{props.city}</h2>
            <span className="weatherDisplay__contentbox__temp">
                {props.temp}<span className="weatherDisplay__contentbox__cUnit">&#8451;</span>
            </span>
            <span className="weatherDisplay__contentbox__desc">
                <em>{props.desc}</em>
            </span>
        </div>

        <div className="weatherDisplay__contentbox weatherDisplay__icon-container">
            <img className="weatherDisplay__icon-container__forecastIcon" src={props.icon} alt=""/>
        </div>
    </div>
    </div>
    )
}

export default weatherDisplay;