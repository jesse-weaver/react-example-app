import React, { Component } from 'react';
import FilterableItemList from './FilterableItemList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>The DoveBox</h2>
        </div>
        <div className="main-content">
          <FilterableItemList />
        </div>
      </div>
    );
  }
}

export default App;
