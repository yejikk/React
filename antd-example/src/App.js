import React from "react";
import { Row, Col } from "antd";

function MyCol({ span, offset }) {
  const opacity = Math.round(Math.random() * 10) / 10;
  return (
    <Col span={span} offset={offset}>
      <div style={{ height: 50, backgroundColor: "red", opacity }} />
    </Col>
  );
}

// 기본적으로 24
function App() {
  return (
    <div className="App">
      <Row
        style={{
          height: 300
        }}
        type="flex"
        justify="center"
        align="middle"
      >
        <MyCol span={4} />
        <MyCol span={4} />
        <MyCol span={4} />
        <MyCol span={4} />
      </Row>
    </div>
  );
}

export default App;
