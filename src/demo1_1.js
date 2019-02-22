import React, { PureComponent, Component } from "react";
import ReactDOM from "react-dom";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onInput = this.onInput.bind(this);
  }
  onInput(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <>
        <span>demo1_1: </span>
        <input onChange={this.onInput} value={this.state.value} />
        <span>{this.state.value}</span>
      </>
    );
  }
}
export default App;
