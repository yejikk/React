import React from "react";
import "./App.css";

const data = [
  {
    title: "Node",
    value: 0,
  },
  {
    title: "React",
    value: 1,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.map((item) => (
          <>
            <p>
              {item.title} - {item.value}
            </p>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
