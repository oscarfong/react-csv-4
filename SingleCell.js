import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleCell extends Component {
  constructor() {
    super();
    this.state = {
      value: ' aa '
    };
  }
  renderSomething(firstCSVArg, pArgs2ndToLast) {
    
    return <span>

        <input type="text" 
          value={firstCSVArg}
          onChange={event => this.onChange(event)} /> 
          <SingleCell rowCSVData={pArgs2ndToLast.join(',')} />
        
          
    </span>
  }

  renderTerminalCase() {
    return <div>
    </div>
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