import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherPanel from './components/WeatherPanel/WeatherPanel';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <WeatherPanel/>
      <Footer/>
      </div>
    );
  }
}

export default App;
