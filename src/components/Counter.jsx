import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3 role="counter-heading">Counter: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
