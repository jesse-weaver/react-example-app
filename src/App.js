import React, { Component } from 'react';
import DoveList from './DoveList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>The DoveBox</h2>
        </div>
        <div className="main-content">
          <DoveList />
        </div>
      </div>
    );
  }
}

export default App;
