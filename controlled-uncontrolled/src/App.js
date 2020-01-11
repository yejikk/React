import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <div className="App">
      <Controlled></Controlled>
      <Uncontrolled></Uncontrolled>
    </div>
  );
}

export default App;
