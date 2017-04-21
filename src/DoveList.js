import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class DoveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doves:[] 
    }
  }

  componentWillMount() {
    fetch('http://localhost:3004/doves')
      .then(response => response.json())
      .then((doves) => {
        this.setState({ doves }); 
      })
      .catch(err => {
        console.log('something went wront with fetch:', err);
      });
  }

  renderDove = item => (
    <span>
      <li>id: {item.id}</li>
      <li>active: {item.active}</li>
      <li>color: {item.color}</li>
      <li>images_collected: {item.images_collected}</li>
      <li>last_command: {item.last_command}</li>
      <li>deorbit_dt: {item.deorbit_dt}</li>
    </span>
  )

  render() {
    let listItems;
    if (!this.state.doves) {
      listItems = <li>loading</li>;
    } else {
      listItems = this.state.doves.map((dove, key) => 
        <ul key={key} className="listItem">{this.renderDove(dove)}</ul>
      );
    }
    
    return (
      <div>
        <h1>List of Doves</h1>
        {listItems}    
      </div>
    );
  }
}

export default DoveList;
