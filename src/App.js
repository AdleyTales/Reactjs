import React from 'react';

import MyCompon from './MyCompon.js';

class App extends React.Component {

  constructor() {
    super();
    this.y = 'yyyyyyyyyyy'
  }

  add(){
    alert(this.y)
  }

  render() {
    return (
      <div> 
        <MyCompon a="100" b="bbbbbbb" c="ddddddddddd"></MyCompon> 
        <MyCompon></MyCompon> 
        <MyCompon></MyCompon> 
        {this.y}
      
      </div>
    );
  }

}
export default App;