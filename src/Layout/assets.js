import React from 'react';

export const DropdownArrow = ({ height = 20, width = 20, style }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', ...style }}>
      <path d="M6.175 6.9125L10 10.7292L13.825 6.9125L15 8.0875L10 13.0875L5 8.0875L6.175 6.9125Z" fill="currentColor" />
    </svg>
  );
};

export const HamburgerMenu = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="black" />
    </svg>
  );
};

export const Close = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
    </svg>
  );
};
