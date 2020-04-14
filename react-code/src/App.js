import React from "react";
import "./App.css";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    // 현재 클래스의 변화를 유도하는 비동기 함수
    // render와 Unmount에서는 사용이 불가하다.
    // 비동기적으로 실행되기 때문에 render에서 사용이 불가능하고
    // Unmount는 사라지는 과정이기 때문에 사용이 불가능하다.
    this.setState = {};
  }

  // Render 함수가 이루어지기 직전 메소드
  // 화면에 UI가 보여지기 전
  componentWillMount() {}

  // Rendering이 최초 1회 실행된 메소드
  componentDidMount() {}

  // 더이상 사용하지 않을 때 메모리 누수를 방지하기 위하여 작업을 초기화한다.
  componentWillUnmount() {}

  render() {
    return <> </>;
  }
}

export default LifeCycle;
