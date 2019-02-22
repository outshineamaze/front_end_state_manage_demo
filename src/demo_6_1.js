import React, { PureComponent, Component } from "react";

//举个例子, 现在要开发一个列表组件应用, 点击某一行, 就会在这行后面添加字符串 "已选择"

const ListItemComponent = (props = {}) => {
  const { isSelected, onClick, value } = props;
  console.log(value);
  return (
    <li onClick={onClick}>
      <span>{value}</span>
      {isSelected ? "已选择" : ""}
    </li>
  );
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.state = {
      selectedList: []
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e, value) {
    console.log(this.state.selectedList.includes(value));
    const newSelectedList = this.state.selectedList.concat([value]);
    this.setState({
      selectedList: newSelectedList
    });
  }

  render() {
    return this.data.map(item => {
      console.log(this.state.selectedList.includes(item));
      // ListItemComponent 可以作为props的一个属性直接传递进来, 相当于 ListItemComponent的逻辑部分都是可以直接复用的.
      return (
        <ListItemComponent
          value={item}
          onClick={event => this.onClick(event, item)}
          isSelected={this.state.selectedList.includes(item)}
        />
      );
    });
  }
}

export default App;
