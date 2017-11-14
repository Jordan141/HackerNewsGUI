import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {dummy: {}, data: {}}

  componentDidMount(){
    fetch('/items/dummyData')
      .then(res => res.json())
      .then(dummy => this.setState({dummy}))
    
    fetch('/items/test')
      .then(res => res.json())
      .then(data => this.setState({data}))
  }
  render() {
    return (
      <div className="App">
        <h1> Dummy Data </h1>
        <div>{JSON.stringify(this.state.dummy)}</div>
         <h1> Test Data </h1>
         {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
