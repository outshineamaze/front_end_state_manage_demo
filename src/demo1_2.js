import React, { PureComponent, Component } from "react";
import ReactDOM from "react-dom";

// 表单 输入框组件
class FormInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: "2234"
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
        输入组件:
        <input onChange={this.onInput} value={this.state.value} />
        <span>{this.state.value}</span>
      </>
      // 更多其他的输入框
    );
  }
}

// 表单预览组件
class FormPreview extends PureComponent {
  render() {
    return (
      <>
        预览部分:
        <label>{this.props.value}</label>
      </>
      //  更多其他的渲染逻辑
    );
  }
}

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <span>demo1_2: </span>
        <br />
        <FormInput />
        <hr />
        <FormPreview />
      </div>
    );
  }
}

export default App;
