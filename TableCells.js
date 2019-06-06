import React, { Component } from 'react';
import { render } from 'react-dom';


class TableCells extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

    onChange (event) {
      this.setState({ value: event.target.value })
    }

  render() {
    return <div>
        TableCells <div/>
        <input type="text" 
          value={this.state.value}
          onChange={event => this.onChange(event)} />       
        msg1: {this.props.toParse} 

    </div>

  }
}


export default TableCells ;
