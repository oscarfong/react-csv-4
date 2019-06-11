
import React, { Component } from 'react';


class MyBootstLvl2 extends Component {

  render() { 
    this.props.sendData( "from MyBootstLvl2 " );
    return (<div></div> );
  }

}

export  default MyBootstLvl2;