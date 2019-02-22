import React, { useState } from "react";

function useIsSelected(friendID) {
  const [isSelected, setIsSelected] = useState(false);

  function handleStatusChange(e) {
    setIsSelected(!isSelected);
  }
  return [isSelected, handleStatusChange];
}

function List1() {
  const [selected, actions] = useIsSelected();

  return <span onClick={actions}>list1(点我) {selected ? "选中" : ""} </span>;
}

function List2() {
  const [selected, actions] = useIsSelected();
  return <span onClick={actions}>list2(点我) {selected ? "选中" : ""}</span>;
}

function App() {
  return (
    <>
      <List1 />
      <br />
      <List2 />
    </>
  );
}

export default App;
