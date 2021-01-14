/* eslint-disable react/no-did-update-set-state */
import React, { Component, createRef } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();

    this.state = {
      count: 0,
      isEven: true,
      scrolled: false,
    };
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState((state) => ({ isEven: state.count % 2 === 0 }));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const pos = this.ref?.current?.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;
    const offset = 50;

    if (pos + offset < scrollPos) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  increment = () => { this.setState((prevState) => ({ count: prevState.count + 1 })); }

  decrement = () => { this.setState((prevState) => ({ count: prevState.count - 1 })); }

  render() {
    const { count, isEven, scrolled } = this.state;

    return (
      <div className={`counter hidden ${scrolled ? 'fade-in' : ''}`} ref={this.ref}>
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
