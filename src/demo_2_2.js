import React, { PureComponent, Component } from "react";

// 使用ContextAPI的方式.  如何了理解 contextAPI? 可以理解contexAPI就是一个桥梁, 可以实现props的夸组件层级传递, 比如可以把props从跟节点传递到底层的节点
// 关于ContextAPI详情可以参考 https://reactjs.org/docs/context.html#reactcreatecontext

const FormDataContext = React.createContext({});

// 输入框组件
const Input = () => {
  return (
    <FormDataContext.Consumer>
      {props => {
        return (
          <>
            输入:
            <input onChange={props.onChange} value={props.value} />
          </>
        );
      }}
    </FormDataContext.Consumer>
  );
};

// 表单容器
const FormContainer = () => {
  return (
    <Input />
    // ... 其他表单字段
  );
};

// 预览组件
const PreviewDetail = (props = {}) => {
  return (
    <FormDataContext.Consumer>
      {props => {
        return <label>预览:{props.value}</label>;
      }}
    </FormDataContext.Consumer>
  );
};

// 预览容器
const PreviewContainer = () => {
  return (
    <PreviewDetail />
    // ...其他预览详情内容
  );
};

class App extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: "",
      onChange: this.onChange
    };
  }
  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <FormDataContext.Provider value={this.state}>
        demo_2_2:
        <br />
        <FormContainer />
        <hr />
        <PreviewContainer />
      </FormDataContext.Provider>
    );
  }
}

export default App;
