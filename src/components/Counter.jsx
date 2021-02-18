import React from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h3 className="heading">Counter: {count}</h3>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
