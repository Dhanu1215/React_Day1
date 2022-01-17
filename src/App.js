import React from 'react';
import './App.css';

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
      </div>
    );
  }
}
export default App;
