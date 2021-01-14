import React from 'react';
import Counter from './CounterFunctionalV2';

const CounterContainer = () => {
  return (
    <div>
      {Array.from(Array(10).keys()).map((val) => (
        <h3 key={val}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a nisl ipsum. Nulla volutpat odio ut tellus vehicula vulputate.
          Nunc urna erat, fringilla et urna eu, vulputate porta lacus. Nam volutpat odio id neque pulvinar iaculis at a leo. Quisque quis purus elit.
          Etiam risus lacus, consectetur eu porttitor id, accumsan nec felis. Nullam ultrices lacus nunc, at convallis arcu efficitur id.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis non erat nec viverra.
          Quisque ut ex porttitor velit blandit bibendum vitae sed odio. Donec sit amet accumsan lacus. Curabitur rutrum erat odio, quis condimentum orci imperdiet sed.
          Nullam imperdiet consequat enim sed fermentum.
        </h3>
      ))}
      <Counter />
    </div>
  );
};

export default CounterContainer;
