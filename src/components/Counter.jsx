import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
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

Counter.propTypes = {};

export default Counter;
