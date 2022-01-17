import React from 'react';
import './App.css';
import logo from './assets/logo.bridge.jfif'
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'

  constructor() {
    super()
    this.state = {
      userName : '',
      nameError : ''
    }
  }
  
  //onClick function
  onClick = ($event) =>{
    console.log("save button is clicked!", $event)
    window.open(this.url, "blank");
  }
  
  onNameChange = (event) =>{
    console.log("value is", event.target.value)
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    // Set the tital using setState method
    this.setState({userName : event.target.value})
    //Ensure input username valid or not
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    }
    else {
      this.setState({nameError: 'Name is Incorrect'})
    }
}

  render() {
    return(
      <div className='container'>
      <div className='block'>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick} 
            alt ="The Bridgelabz logo: a Bridge to Employement through labz works"/>
        </div>
        <div>
          <input onChange={this.onNameChange}/>
          <span className='error-output'>{this.state.nameError}</span>
        </div>
        <div className='text'>
          <p>
            At Bridgelabz, we're a community of
          </p>
          <ul>
            <li>technologist</li>
            <li>thickners</li>
            <li>builders</li>
          </ul>
          <p>
            Working together to keep the Tech Employability of Engineers alive and 
            accessible, so Tech Companies worldwide can get contributors and 
            creators for Technology Solutions. We belive this act of human 
            collaboration across an employability platform is essential to individual
            growth and our collective future.
          </p><br></br>
          <p>
            To Know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>to learn even more about our mission
          </p> 
          <p className='bold'>
            i.e. Employability to all.
          </p><br></br>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
