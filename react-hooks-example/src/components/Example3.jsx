// Functional Component
import React, { useState } from "react";

export default function Example3() {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        Click me
      </button>
    </div>
  );
}
