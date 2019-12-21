import React from 'react';
import './App.css';

class App extends React.Component {
  _interval;

  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      age: 37,
    };
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
    this._interval = window.setInterval(() => {
      this.setState({
        age: this.state.age + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
    clearInterval(this._interval);
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      `App componentWillReceiveProps : ${JSON.stringify(nextProps)}`,
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `App shouldComponentUpdate : ${JSON.stringify(
        nextProps,
      )}, ${JSON.stringify(nextState)}`,
    );
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      `App componentWillUpdate : ${JSON.stringify(
        nextProps,
      )}, ${JSON.stringify(nextState)}`,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `App componentDidUpdate : ${JSON.stringify(
        prevProps,
      )}, ${JSON.stringify(prevState)}`,
    );
  }

  render() {
    console.log('App render');
    return (
      <div>
        <h2>
          Hello {this.props.name} - {this.state.age}
        </h2>
      </div>
    );
  }
}

export default App;
