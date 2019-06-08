import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleCell extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  renderSomething() {
    return <div>
        <input type="text" 
          value={this.state.value}
          onChange={event => this.onChange(event)} />  
    </div>
  }

  renderTerminalCase() {
    return <div>
    </div>
  }

  render(){
    if (this.props.value !="" ) // how value is passed from TableCSV to SingleCell
    {
      return this.renderSomething()
    } else {
      return this.renderTerminalCase()
    }
  }
}

export default SingleCell;