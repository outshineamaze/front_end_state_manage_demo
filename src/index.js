import React, { PureComponent, Component } from "react";
import { render } from "react-dom";
import "./styles.css";

import Demo1_1 from "./demo1_1.js";
import Demo1_2 from "./demo1_2.js";
import Demo2_1 from "./demo_2_1.js";
import Demo2_2 from "./demo_2_2.js";
import Demo2_3 from "./demo_2_3.js";

import Demo4_1 from "./demo_4_1.js";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Demo1_1 />
        <hr />
        <Demo1_2 />
        <hr />
        <Demo2_1 />
        <hr />
        <Demo2_2 />
        <hr />
        <Demo2_3 />
        <hr />
        <Demo4_1 />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
