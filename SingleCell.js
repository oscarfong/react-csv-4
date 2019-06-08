import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleCell extends Component {
  constructor() {
    super();
    this.state = {
      value: ' aa '
    };
  }
  renderSomething(firstCSVArg) {
    
    return <div>

        <input type="text" 
          value={firstCSVArg}
          onChange={event => this.onChange(event)} /> 
          
    </div>
  }

  renderTerminalCase() {
    return <div>
    </div>
  }

  render(){

    //ss:String = this.props.value ;
    //ss= String.prototype.trim.call( this.props.value);
    //var ss = this.props.value ;
    var ss =this.props.rowCSVData.trim() ;
    this.state.stateValue =ss ;
    //var tt = ss.trim();

    //ss.trim()

    if ( this.props.value !="" ) // how value is passed from TableCSV to SingleCell
    {
      const parseArr = this.props.rowCSVData.split(',');
      return this.renderSomething( parseArr[0] )
    } else {
      return this.renderTerminalCase()
    }
  }
}

export default SingleCell;