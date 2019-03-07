import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import WeatherSearch from './WeatherSearch/WeatherSearch';
import InfoFooter from './InfoFooter/InfoFooter';

class App extends Component {
  state = {
    forecasts : [
      {      
        city: 'Malaga', 
        temp: '28.4',
        desc: 'Sunny as always'
      },
      {
        city: 'Benalmadena', 
        temp: '26.4',
        desc: 'Nice summer weather'
      }
    ],
    search: '',
  };

  render() {
    return (
      <div className="App">
        <h1>My Weather App MVP</h1>        
        <WeatherDisplay 
          city={this.state.forecasts[0].city}
          temp={this.state.forecasts[0].temp}
          desc={this.state.forecasts[0].desc}
        />
        <WeatherSearch />
        <InfoFooter />
      </div> 
    );
  }
}

export default App;