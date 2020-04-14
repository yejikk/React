import React from "react";
import "./App.css";

// state - 해당하는 컴포넌트 안에서만 내부적으로 사용한다.
// 다른 컴포넌트와의 데이터 교환을 하지 않고 외부와 관련없이 내부적으로 사용한다.

// props - 상위 계층의 컴포넌트와 데이터 교환을 위해서 사용한다.
class Fast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state안에 props 데이터를 저장할 수 있다.
      props,
      lang: "javascript",
      fn: function () {},
      date: new Date(),
    };
  }

  render() {
    const { lang, date } = this.state;

    return (
      <div>
        {lang} {date}
      </div>
    );
  }
}

export default Fast;
