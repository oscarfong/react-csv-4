import React, { Component } from 'react';
import { render } from 'react-dom';

import './TableCSV.css';

import SingleCell from './SingleCell';

import { Table } from 'react-bootstrap';

class TableCSV extends Component {


    onChange (event) {
      this.setState({ value: event.target.value })
    }

  render() {  
    const firstCommaPos = this.props.toParse.indexOf(",");


    
    return <div><Table striped bordered hover>
    <thead />
    <tbody>
        <tr>
          <td class="col">>> .. </td>
          <SingleCell rowCSVData={this.props.toParse}   />
        </tr>

        <tr>
          <td class="col">>> .. </td>
          <SingleCell rowCSVData={this.props.toParse}   />
        </tr>

      </tbody>







      
    </Table>
    </div>




    // firstCommaPos:{firstCommaPos}

  }
}


export default TableCSV;
