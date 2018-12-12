import React from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "3014d36ee8f7c35e8cd52b7c9c040e04";


class App extends React.Component {
  //constructor() {
    //this.getWeather = this.getWeather.bind(this);
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
    getWeather =  async (e) => {
      e.preventDefault();
      const city = e.target.elements.name.city.value;
      const country = e.target.elements.name.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

      const data = await api_call.json();
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      })
    }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.country}
            error={this.state.error}
            />
        </header>
      </div>
    );
  }
};


export default App;
