import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import airHorn from './audio/airHornAudio.mp3'

class App extends Component {
  constructor() {
    super()
    // this.playAudio = this.playAudio.bind(this)
  }
  playAudio(e) {
    console.log(e);
    var audio = new Audio(airHorn);
    audio.play();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to HIP HOP AIR HORN</h2>
        </div>
        <div className="App-intro">
          <button className="pulse-button" onClick={this.playAudio.bind(this)}>Brap</button>
        </div>
      </div>
    );
  }
}

export default App;
