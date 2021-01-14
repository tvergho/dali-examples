/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isEven: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState((state) => ({ isEven: state.count % 2 === 0 }));
    }
  }

  increment = () => { this.setState((prevState) => ({ count: prevState.count + 1 })); }

  decrement = () => { this.setState((prevState) => ({ count: prevState.count - 1 })); }

  render() {
    const { count, isEven } = this.state;
    return (
      <div className="counter">
        <button type="button" onClick={this.decrement} className="control">-</button>
        <div className="counter-text">
          <p>{`Count: ${count}`}</p>
          <p>{`Is even: ${isEven}`}</p>
        </div>
        <button type="button" onClick={this.increment} className="control">+</button>
      </div>
    );
  }
}

export default Counter;
