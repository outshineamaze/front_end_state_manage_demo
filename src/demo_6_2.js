import React, { useState } from "react";

const ListItemComponent = (props = {}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { value } = props;
  return (
    <li onClick={() => setIsSelected(!isSelected)}>
      <span>{value}</span>
      {isSelected ? "已选择" : ""}
    </li>
  );
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  return data.map(item => <ListItemComponent value={item} />);
};

export default App;
