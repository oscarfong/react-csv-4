import React, { Component } from 'react';
import { render } from 'react-dom';

import './TableCSV.css';

import SingleCell from './SingleCell';

class TableCSV extends Component {


    onChange (event) {
      this.setState({ value: event.target.value })
    }

  render() {  
    const firstCommaPos = this.props.toParse.indexOf(",");

    
    return <div class="TableCells">
        TableCells <div/>
        <SingleCell/>
     
        //msg1: {this.props.toParse} <p/>
        //keyOfCell:{this.props.keyOfCell}
<p/>
        firstCommaPos:{firstCommaPos}

    </div>

  }
}


export default TableCSV;
