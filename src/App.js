import React from 'react';
import './App.css';
import logo from './assets/logo.bridge.jfif'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      tital : "Hello From Bridgelabz"
    }
  }
  render() {
    return(
      <div>
          <h1>{this.state.tital}</h1>
          <img src={logo} alt='The Bridgelabz logo: a Bridge to Employement through labz works'/>
      </div>
    );
  }
}
export default App;
