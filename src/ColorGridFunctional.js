import React from 'react';

const ColorGridFunctional = ({ colors }) => {
  return (
    <div className="color-grid">
      {colors && colors.map((color) => (<div style={{ backgroundColor: color }} className="grid-item" />))}
    </div>
  );
};

export default ColorGridFunctional;
