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

    
    return <div class="container">
      <div class="row">
        <div class="col">>> .. </div>
     
        <SingleCell rowCSVData={this.props.toParse}   />
     
        
        

      </div>







      
    </div>
    // firstCommaPos:{firstCommaPos}

  }
}


export default TableCSV;
