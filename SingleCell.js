import React, { Component } from 'react';
import { render } from 'react-dom';

import { Table } from 'react-bootstrap';
class SingleCell extends Component {
  constructor() {
    super();
    this.state = {
      value: ' aa '
    };
  }


  renderSomething(firstCSVArg, pArgs2ndToLast) {

    // JSX can be concatenate as elements of an array. [ , , ]
    
    return [
      <td>

        <input type="text" 
          value={firstCSVArg}
          onChange={event => this.onChange(event)} /> 
        
          
      </td>,
      <SingleCell rowCSVData={pArgs2ndToLast.join(',')} />
    ]
  }

  renderTerminalCase() {
    return <td>
    </td>
  }



  render(){

    var ss =this.props.rowCSVData.trim() ;


    if ( ss !="" ) 
    {
      const parseArr = this.props.rowCSVData.split(',');

      var thisArg = parseArr.shift();

      return this.renderSomething( thisArg , parseArr)  
    } else {
      return this.renderTerminalCase()
    }
  }
}

export default SingleCell;