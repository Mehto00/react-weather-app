import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import WeatherSearch from './WeatherSearch/WeatherSearch';
import InfoFooter from './InfoFooter/InfoFooter';
import axios from 'axios';
import API_key from './API_key';

class App extends Component {
  state = {
    forecasts : [
      {      
        city: 'Malaga', 
        temp: '28.4',
        desc: 'Sunny as always',
        icon: 'http://openweathermap.org/img/w/11d.png'
      },
      {
        city: 'Benalmadena', 
        temp: '26.4',
        desc: 'Nice summer weather',
        icon: '10d.png'
      }
    ],
    search: '',
    data: "",
    temp: '',
    desc: '',
    iconURL: ""
  };
  
  componentDidMount() {
    console.log(API_key.key);
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=${API_key.key}`);

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=${API_key.key}`)
          .then(res => {
            console.log(res);
            this.setState({data : res.data})
            this.setState({temp : res.data.main.temp})
            this.setState({desc : this.state.data.weather[0].description})
            this.setState({iconURL : `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`})
            console.log()
          })
          .catch(function (error) {
            console.log(error);
          })
    };

  celciusConvertedTemp() {
      return (Math.round((this.state.temp - 273.15) * 10) / 10) // return with one decimal
              .toString().replace(".", ",") // format to finnish standard
  }

  render() {
    return (
      <div className="App">
        <h1>My Weather App MVP</h1>
        <WeatherDisplay 
          city={this.state.data.name}
          temp={this.celciusConvertedTemp()}
          desc={this.state.desc}
          icon={this.state.iconURL}
        />
        <WeatherSearch />
        <InfoFooter />
      </div> 
    );
  }
}

export default App;