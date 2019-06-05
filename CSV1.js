
import React, { Component } from 'react';
import { render } from 'react-dom';

class CSV1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'CSV1 in React'
    };
  }

render() {
    return (
      <div>
        
        <p>
          Start editing to see some magic happen :)
          <p/>
          Test to see if stackblitz reverts my code.
        </p>

        <div csvLine1='1,3,"apple"'>
        </div>
        {this.state.name}
        <p/>
        {this.props.csvLine1}


      </div>
      
    );
  }
}

//render(<CSV1 />, document.getElementById('root1'));
export default CSV1;
