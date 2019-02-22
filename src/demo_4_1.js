import React, { PureComponent, Component } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

// reducer/index.js
// reduce里面都是纯函数, 不依赖其他的全局状态. 具有幂等性, 简单的理解就是传入 store 和
const reducer = (
  state = { str: "✒️write something: ", placeholder: "here?" },
  action
) => {
  switch (action.type) {
    case "INPUTCHANGE":
      return {
        str: action.value
      };
    default:
      return state;
  }
};

// actions/index.js
const onChangeAction = e => ({
  type: "INPUTCHANGE",
  value: e.target.value
});

// component/Input.js
// 纯UI组件, stateless, 不维护组件的状态, 只做纯渲染操作
const Input = props => (
  <div>
    <h2>{props.str}</h2>
    <input onChange={props.onChange} placeholder={props.placeholder} />
  </div>
);

// container/index.js
const mapStateToProps = state => {
  return {
    str: state.str,
    placeholder: state.placeholder
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      return dispatch(onChangeAction(e));
    }
  };
};
// 在这里把store的数据和 修改数据的dispatch方法注入到组件中
const InputWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

//  app.js 应用入口
const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <InputWithState />
  </Provider>
);

export default App;
