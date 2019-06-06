import React, { Component } from 'react';
import { render } from 'react-dom';

import TableCells from './TableCells';

class CSVTextArea extends Component {
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
        <textarea rows='4' cols='40' onChange={event => this.onChange(event)} ></textarea>

        <p/>
        {this.state.value}
        <TableCells toParse='123'/>
    </div>

  }
}


export default CSVTextArea;
