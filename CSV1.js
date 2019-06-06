
import React, { Component } from 'react';
import { render } from 'react-dom';

import CSVTextArea from './CSVTextArea';
class CSV1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'CSV1 in React'
    };
  }

// method: editDistance
editDistance(s1, s2) {
  // https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely

  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
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
        <p/>
        {this.editDistance("aaa1", "aba") }
        <CSVTextArea/>


      </div>
      
    );
  }
}

//render(<CSV1 />, document.getElementById('root1'));
export default CSV1;
