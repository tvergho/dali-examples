import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  const increment = () => { setCount((c) => c + 1); };
  const decrement = () => { setCount((c) => c - 1); };

  return (
    <div className="counter">
      <button type="button" onClick={increment} className="control">+</button>
      <div className="counter-text">
        <p>{`Count: ${count}`}</p>
        <p>{`Is even: ${isEven}`}</p>
      </div>
      <button type="button" onClick={decrement} className="control">-</button>
    </div>
  );
};

export default Counter;
