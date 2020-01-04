import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton, { PrimaryStyledButton } from "./components/StyledButton";

function test(str) {
  console.log(str);
}

function App() {
  // test 함수 실행
  test`hello`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          <PrimaryStyledButton>버튼</PrimaryStyledButton>
        </p>
      </header>
    </div>
  );
}

export default App;
