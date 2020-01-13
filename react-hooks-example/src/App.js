import React, { useEffect, useState } from "react";
import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5,";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const [visible, setVisible] = useState(true);
  const width = useWindowWidth();
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <h1>{width}</h1>
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
      {/* <Example4></Example4> */}
      {visible && <Example5></Example5>}
    </div>
  );
}

export default App;
