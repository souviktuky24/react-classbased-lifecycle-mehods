import React, { Component } from 'react';
import Counter from './components/counter'

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

  increment = () => {
    this.setState({count : this.state.count + 1});
    console.log(this.state.count + 1);
  }

  render() {
    console.log('render')
    return (
      <div>
        <Counter number={this.state.count} />
        <h1>Let's show the count - {this.state.showCount}</h1>
          <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}


export default App;

// function App() {
//   return (
//     <>
//       <div>
//         Selects
//       </div>
//     </>
//   );
// }
