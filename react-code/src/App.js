import React from "react";
import "./App.css";

const Loading = () => <div>Loading ... </div>;

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  comment() {
    const con = 1;
    const res = con > 0 ? true : false;
  }

  render() {
    const { loading } = this.state;
    return <>{loading ? <Loading /> : <div>this is a webpage</div>}</>;
  }
}

export default Study;
