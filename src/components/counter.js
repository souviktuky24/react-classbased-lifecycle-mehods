import React, { Component } from 'react';

class Counter extends Component {

  componentDidUpdate(prevProps,prevState) {
    if (prevProps.number !== this.props.number) {
      console.log("Component updated");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}


export default Counter;
