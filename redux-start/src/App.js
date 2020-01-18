import React, { createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
import { addTodo, completeTodo } from "./actions";

function App({ store }) {
  function click() {
    const text = inputRef.current.value;
    console.log(text);
    store.dispatch(addTodo(text));
  }
  const todos = store.getState().todos;
  const inputRef = React.createRef();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input ref={inputRef} />
        </p>
        <button onClick={click}>add</button>
        <ul>
          {todos.map((todo, index) => (
            <div key={index}>
              <h2>
                {todo.text}{" "}
                {todo.done ? (
                  "(완료)"
                ) : (
                  <button
                    onClick={() => {
                      store.dispatch(completeTodo(index));
                    }}
                  >
                    끝!
                  </button>
                )}
              </h2>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
