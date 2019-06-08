// 20190521 new repository : react-duckuk


import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import CSV1 from './CSV1';
import './style.css';

import {Helmet} from "react-helmet";
import Safe from "react-safe";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  basicOutput1() { 
    return  (
          <Hello name={this.state.name} />
      );
  
  }

  // used Safe.script instead of Helmet (react-helmet)
  render() {
    return (
      <div>
        

        {this.basicOutput1()}

        <CSV1 csvLine1='1,3,"apple"'>
        </CSV1>


      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
