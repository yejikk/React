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

  // create Reference를 만들고 current를 찍어봐야함
  const inputRef = React.createRef();

  function mouseEnter() {
    if (inputRef.current !== null) {
      const inputEle = inputRef.current;
      inputEle.focus();
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" onMouseEnter={mouseEnter} ref={inputRef} />
        </p>
      </header>
    </div>
  );
}

export default App;
