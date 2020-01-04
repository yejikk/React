import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/StyledButton";
import StyledA from "./components/StyledA";

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
          <StyledA href="http://google.com" target="_BLANK">
            링크
          </StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
