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
    
    return <div>

        <input type="text" 
          value={firstCSVArg}
          onChange={event => this.onChange(event)} /> {pArgs2ndToLast+
          ";"}
          
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
    //this.state.stateValue =ss ;
    //var tt = ss.trim();

    //ss.trim()

    if ( ss !="" ) // how value is passed from TableCSV to SingleCell
    {
      const parseArr = this.props.rowCSVData.split(',');

      //var thisArg = parseArr[0]
      var thisArg = parseArr.shift();

//      var args2ndToLast = (parseArr.pop()).join(',');
      //var args2ndToLast = (parseArr.pop());
      //var args2ndToLast = parseArr[1..];
      //const joined2ndToLast = args2ndToLast.join(',');


      return this.renderSomething( thisArg , parseArr)  
    } else {
      return this.renderTerminalCase()
    }
  }
}

export default SingleCell;