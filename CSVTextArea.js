import React, { Component } from 'react';
import { render } from 'react-dom';

import TableCSV from './TableCSV';

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
        <TableCSV toParse='123,abc,567'/>
        <TableCSV toParse='123,abc,567'/>
    </div>

  }
}


export default CSVTextArea;
