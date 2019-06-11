
import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import MyBootstLvl2 from './MyBootstLvl2';

class MyBootstrapTest extends Component {
  constructor() {
    super();

    this.getData = this.getData.bind(this);
  };

  getData(val){
    // do not forget to bind getData in constructor
    console.log(val);  //successful
  }
  
  render() {
    return (
      <div>
        <a href = "https://react-bootstrap.github.io/components/table/">doc for Table</a>
        <MyBootstLvl2 sendData={this.getData}/>
        {this.getData}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        
      </div>
    );
  }

}


export default MyBootstrapTest ;
