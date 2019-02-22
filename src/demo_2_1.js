import React, { PureComponent, Component } from "react";
import ReactDOM from "react-dom";

// 需求: 写一个表单信息预览卡片, 需要实现 左侧展示表单, 右侧实时展示表单的填写数据预览
// 实现: 把 App拆成两个组件, 分别为表单组件和 表单预览组件, 组件的状态数据全部存放在App组件中,  通过 props 传递给 子组件, 子组件通过this.props.onChange 修改父组件的 state数据

// 表单 输入框组件
class FormInput extends PureComponent {
  render() {
    return (
      <>
        输入:
        <input onChange={this.props.onChange} value={this.props.value} />
      </>
      // 更多其他的输入框
    );
  }
}

// 表单预览组件
class FormPreview extends PureComponent {
  render() {
    return (
      <label>预览: {this.props.value}</label>
      //  更多其他的渲染逻辑
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        demo_2_1:
        <FormInput value={this.state.value} onChange={this.onChange} />
        <hr />
        <FormPreview value={this.state.value} />
      </div>
    );
  }
}

export default App;
