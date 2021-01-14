/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class ColorGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colors } = this.props;

    return (
      <div className="color-grid">
        {colors && colors.map((color) => (<div style={{ backgroundColor: color }} className="grid-item" />))}
      </div>
    );
  }
}

export default ColorGrid;
