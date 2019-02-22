import React, { PureComponent, Component } from "react";

class Child_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // 发布 msg 事件
      document.dispatchEvent(new CustomEvent("msg", { detail: "world" }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>child_1 component: {this.state.msg}</p>
      </div>
    );
  }
}

class Child_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
  }

  componentDidMount() {
    // 监听 msg 事件
    document.addEventListener(
      "msg",
      e => {
        this.setState({
          msg: e.detail
        });
      },
      false
    );
  }

  render() {
    return (
      <div>
        <p>child_2 component: {this.state.msg}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        demo_2_3:
        <Child_1 />
        <Child_2 />
      </div>
    );
  }
}
export default App;
