import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import WeatherSearch from './WeatherSearch/WeatherSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Weather App MVP</h1>
        <WeatherSearch />
        <WeatherDisplay city="Malaga" temp="26.4" desc="Sunny as always"/>  
      </div>
    );
  }
}

export default App;