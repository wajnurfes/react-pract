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

  add = () => {
    this.setState({
      sum: this.state.sum + 1
    });
  }


  render() { 
    return(
      <div className="App"> 
          {(() => {
            if (this.state.toggled) return <button onClick={this.toggle}>Don't click on me.</button>
            else return <button onClick={this.toggle}>Click on me!</button>
          })()}
          <button onClick={this.add}>{this.state.sum}</button>
      </div>
    );
  };
}

export default App;