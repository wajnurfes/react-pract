import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleState = false;
  }

  toggle = () => {
    this.toggleState = !this.toggleState
  }


  render() { 
    return(<div className="App"> 
    <p onClick={this.toggle}>Cick on me!</p>
    </div>);
  };
}

export default App;