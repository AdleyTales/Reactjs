import React from 'react';

class MyCompon extends React.Component {

  constructor(aa) {
    super()
  }

  render() {
    return (
      <div> 
        我是MyCompon组件！
        {this.props.a} 
        {this.props.b} 
      </div>
  )}
}
export default MyCompon;