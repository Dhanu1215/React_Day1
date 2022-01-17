import React from 'react';
import './App.css';
import logo from './assets/logo.bridge.jfif'
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'

  constructor() {
    super()
    this.state = {
      tital : "Hello From Bridgelabz"
    }
  }

  onClick = ($event) =>{
    console.log("save button is clicked!", $event)
    window.open(this.url, "blank");
  }
  
  render() {
    return(
      <div>
          <h1>{this.state.tital}</h1>
          <img src={logo} onClick={this.onClick} alt='The Bridgelabz logo: a Bridge to Employement through labz works'/>
      </div>
    );
  }
}
export default App;
