import React, { Component } from 'react'
// import axios from 'axios'

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


// const weatherApi = axios.create({
//   baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
//   timeout: 3000
// });

const API_KEY = "5088cd97d07ca3f530bfeee7f7f08acc"


export default class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }



  //API Fetch/Call
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);


    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })

      //ERROR CATCH
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter the City and Country"
      })
    }
  }


  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}

        />
      </div>
    )
  }
}
