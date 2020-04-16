import React from "react";
import "./App.css";

// setState는 Render 함수 안에서 사용할 수 없다.
// mount, update에서 setState를 호출 할 수 있다.
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  // ui 초기화
  componentDidMount() {}

  tick() {
    this.setState(
      {
        time: new Date(),
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    const { time } = this.state;
    return <div>{time.date.toLocaleTimeString()}</div>;
  }
}

export default Timer;
