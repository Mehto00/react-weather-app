import React from 'react';

const weatherDisplay = () => {
    return (
    <div className="weatherDisplay">
	<form action="/search" method="GET">
		<input type="text" name="city" placeholder="city name" />
		<br />
		<input type="submit" />
	</form>
    </div>
    )
}

export default weatherDisplay;