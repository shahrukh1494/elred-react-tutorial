import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
    </div>
  );
};

export default UseCallbackExample;
