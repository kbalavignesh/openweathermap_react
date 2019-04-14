import React, { Component } from 'react';
import WeatherHeader from './WeatherHeader/WeatherHeader';
import WeatherBody from './WeatherBody/WeatherBody';
import axios from '../../axios';

class WeatherPanel extends Component {
  state = {
      weatherList: null
  }

  loadWeatherData = () => {
    axios.get( '&q=Edinburgh,UK&units=imperial&count=5&appid=991effd4fafa143538a94cef2182736e' )
        .then( response => {
           this.setState({...this.state,weatherList:response.data.list});
           //console.log(response.data.list);
        } )
        .catch( error => {
            console.log("api failed");
        } );
  }

  componentDidMount() {
      this.loadWeatherData();
  }

  render() {
      return (
        <div className="container">
        <WeatherHeader loadMethod={this.loadWeatherData}/>
         {this.state.weatherList ? (
           <WeatherBody days={this.state.weatherList}/>
         ) : (
            <span>No data</span>
         )}
        </div>
      );
  };
};

export default WeatherPanel;
