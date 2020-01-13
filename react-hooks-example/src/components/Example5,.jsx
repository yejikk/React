import React, { useState } from "react";
import { useEffect } from "react";

export default function Example5() {
  const [count, setCount] = useState(0);

  // 함수 형태 / , 뒤에 들어가는것은 언제 실행하는지
  useEffect(() => {
    // console.log("componentDidMount", count);
    console.log("a");
    return () => {
      // cleanup
      console.log("b");
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
