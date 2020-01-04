import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button, Icon } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Icon type="check" />
        <Button disabled>버튼</Button>
      </header>
    </div>
  );
}

export default App;
