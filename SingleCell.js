import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleCell extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  render() {
    return <div>
        <input type="text" 
          value={this.state.value}
          onChange={event => this.onChange(event)} />  
    </div>
  }
}

export default SingleCell;