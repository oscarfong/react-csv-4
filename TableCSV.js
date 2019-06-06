import React, { Component } from 'react';
import { render } from 'react-dom';


class TableCSV extends Component {
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
    const firstCommaPos = this.props.toParse.indexOf(",");

    
    return <div>
        TableCells <div/>
        <input type="text" 
          value={this.state.value}
          onChange={event => this.onChange(event)} />       
        msg1: {this.props.toParse} <p/>
        keyOfCell:{this.props.keyOfCell}
<p/>
        firstCommaPos:{firstCommaPos}

    </div>

  }
}


export default TableCSV;
