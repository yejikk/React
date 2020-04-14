import React from "react";
import "./App.css";

function App() {
  const handleClick = (param) => {
    // 이벤트 버블링을 방지하기 위하여
    // 돔 객체에 대해서 이벤트가 실행이 될때 하나의 돔 객체가 내부 안에 있어서
    // 외부와 중첩이 되는 구조로 되어있을 때, 해당 기능이 두번 이상 실행될 수 있기 때문에
    // 이를 방지하기 위해 e.preventDefault()를 사용하여 정확한 이벤트 핸들링을 처리할 수 있다.
    console.log(param);
    console.log("button is clicked");
  };

  const newhandleClick = (e) => {
    e.preventDefault();
    console.log("New button is clicked");
  };

  return (
    <div onClick={newhandleClick}>
      <button onClick={() => handleClick("param")}>this is a button</button>
    </div>
  );
}

export default App;
