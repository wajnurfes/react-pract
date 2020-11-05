import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      sum: 0
  }
  }

  toggle = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }
  }


  render() { 
    return(<div className="App"> 
    <p onClick={this.toggle}>Cick on me!</p>
    </div>);
  };
}

export default App;