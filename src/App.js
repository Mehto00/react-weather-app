import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import WeatherSearch from './WeatherSearch/WeatherSearch';

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
    showForecasts: false,
  };

  toggleForecastViews = () => {
    const doesShow = this.state.showForecasts;
    this.setState({showForecasts: !doesShow})
  }

  render() {
    
    let forecasts = null;

    if (this.state.showForecasts) {
    forecasts =
      <div>
        <WeatherSearch />
        {this.state.forecasts.map(forecast => {
          return <WeatherDisplay 
          city={forecast.city} 
          temp={forecast.temp} 
          desc={forecast.desc} />
        })}
      </div>
      }

    return (
      <div className="App">
        <h1>My Weather App MVP</h1>
        <button onClick={this.toggleForecastViews}>Click!</button>
        {forecasts}
      </div> 
    );
  }
}

export default App;