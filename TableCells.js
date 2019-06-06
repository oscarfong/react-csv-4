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
        TableCells <input />
    </div>

  }
}


export default TableCells ;
