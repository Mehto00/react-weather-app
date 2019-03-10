import React from 'react';
import './WeatherSearch.css';

const weatherDisplay = () => {
    return (
    <div className="weatherSearch">
	<form action="/search" method="GET">
		<input type="text" name="city" placeholder="city name" />
		<br />
		<input type="submit"/>
	</form>
    </div>
    )
}

export default weatherDisplay;