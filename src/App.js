import React, { Component } from 'react';
import Counter from './components/counter'
import Counter1 from './components/counter1';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      showCount: "true"
    }
    console.log("xxxxx",this.state.showCount)
  }

  componentDidMount() {
    console.log('componentDidMount - component rendered for the first time');
    console.log("componentDidMount",this.state.showCount)
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount - component removed');
  }

  increment = () => {
    this.setState({count : this.state.count + 1});
    console.log(this.state.count + 1);
  }

  render() {
    console.log('render')
    return (
      <div>
        <h>COUNT coming from Class component - </h>
        <Counter number={this.state.count} />
        <h>COUNT coming from Functional component - </h>
        <Counter1 props={this.state.count} />
        <h1>Let's show the count - {this.state.showCount}</h1>
          <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}


export default App;
