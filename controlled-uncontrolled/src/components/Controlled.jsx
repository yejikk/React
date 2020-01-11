import React from "react";

export default class Controlled extends React.Component {
  state = { value: "" };

  constructor() {
    super();
    this.change = this.change.bind(this);
  }

  render() {
    return <input value={this.state.value} onChange={this.change}></input>;
  }

  change = e => {
    this.setState({
      value: e.target.value
    });
  };
}
