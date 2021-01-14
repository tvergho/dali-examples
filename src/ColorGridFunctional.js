import React from 'react';

const ColorGrid = ({ colors }) => {
  return (
    <div className="color-grid">
      {colors && colors.map((color) => (<div style={{ backgroundColor: color }} className="grid-item" />))}
    </div>
  );
};

export default ColorGrid;
