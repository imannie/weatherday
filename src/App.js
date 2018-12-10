import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    
  }

  onFetch() {
    console.log('Fetch calling');
    fetch('http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchBox},California&appid=0de82b6b4ba5d843dac44bbee4d02543')
    .then(response => respone.json())
    .then(data => {
      console.log('got data -', data);
      this.setState({

      });
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 className="App-title">Welcome to React</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
