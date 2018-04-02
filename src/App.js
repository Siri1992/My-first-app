import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      username:'',
      password:'',
      confirmpassword:''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <form action="#" className="myform">
            <h1 className="App-title">Registration</h1>
            <p>Join the community and improve your game</p>
            <p>with<b> ANGLR</b></p>
              <span><i class="fa fa-user fa-fw"></i><input type="text" defaultValue="First Name"/></span>
              <span><i class="fa fa-user fa-fw"></i><input type="text" defaultValue="Last Name"/></span>
              <span><i class="fa fa-map-marker fa-fw"></i><input type="text" defaultValue="Zipcode"/></span>
              <span><i class="fa fa-envelope-o fa-fw"></i><input type="email" defaultValue="Email"/></span>
              <span><i class="fa fa-user fa-fw"></i><input type="text" defaultValue="Username"/></span>
              <span><i class="fa fa-unlock fa-fw"></i><input type="text" defaultValue="Password"/></span>
              <span><i class="fa fa-lock fa-fw"></i><input type="text" defaultValue="Confirm Password"/></span>
              <p>By Regestering you agree to</p>
              <p> our <b>Terms</b> and <b>Privacy Ploicy</b></p>
              <span><i class="fa fa- fa-fw"></i><button className="App-button" type="submit">Register</button></span>
              <p className="down_text">Already have an account? <a href="#"><b>SIGN IN</b></a></p>
            </form>
        </header>
      </div>
    );
  }
}

export default App;
