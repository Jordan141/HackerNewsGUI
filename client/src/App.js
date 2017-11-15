import React, { Component } from 'react';
import MenuItem from './components/menuItem'
import './App.css';

class App extends Component {
  state = {stories: [], data: {}, specificData: {}}

  componentDidMount(){
    fetch('/items/topstories/1')
    .then(res => res.json())
    .then(data => this.setState({stories: data}))
    //Fetching random data from HN api
    fetch('/items/test')
      .then(res => res.json())
      .then(data => this.setState({data}))
    //Fetching specific data from HN api
    fetch('/items/2923189')
      .then(res => res.json())
      .then(specificData => this.setState({specificData}))

  }
  render() {
    console.log(this.state.stories)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
            </ul>
          </div>
          <div className="col-md-6 listarea">
            {this.state.stories.map((x,i) =>
                <MenuItem key={i} title={x.title} author={x.by} link={x.url} />
            
            )}
            <h1> Test Data </h1>
            <div>{JSON.stringify(this.state.data)}</div>
            <h1> Specific Data </h1>
            <div> {JSON.stringify(this.state.specificData)} </div>
          </div>
          <div className="col-md-3">
          <ul>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
              <li> Hello </li>
            </ul>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
