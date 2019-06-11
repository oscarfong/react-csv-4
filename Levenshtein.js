
import React, { Component } from 'react';
import { render } from 'react-dom';

class LevenshteinDistance extends Component  {
  distance( s,t ){
        
      if (!s.length) return t.length;
      if (!t.length) return s.length;

      var dist= Math.min(
          this.distance(s.substr(1), t) + 1,
          this.distance(t.substr(1), s) + 1,
          this.distance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
      ) + 1;
      return dist;
  }

  render(){
    var s = this.props.a; 
    var t = this.props.b; 
    var dist = this.distance(s,t);

    return <div> {dist} </div>
    
  }
}

export default LevenshteinDistance;