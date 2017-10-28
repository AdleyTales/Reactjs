import React from 'react';

import MyCompon from './MyCompon.js';

class App extends React.Component {

  constructor() {
    super();
    this.y = 1000;
  }

  add(){
    this.y ++;
    console.log(this.y);
  }

  render() {
    return (
      <div>
        <MyCompon a="100" b="bbbbbbb" c="ddddddddddd"></MyCompon>
        <MyCompon></MyCompon>
        <MyCompon></MyCompon>
        {this.y}
        <p onClick={this.add.bind(this)}>点击</p>
        <p onClick={()=>{console.log(this.add);}}>点击2</p>
      </div>
    );
  }

}
export default App;
