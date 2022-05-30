import React from "react";

import PropTypes from "prop-types";

import Button from "./Button";

function Counter({ limit }) {
  const [count, setCount] = React.useState(0);
  const isLimitReached = limit ? count === limit : false;

  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <Button
        onClick={() => {
          if (isLimitReached) return;
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
      {isLimitReached && <span>You reached the limit!</span>}
    </div>
  );
}

Counter.propTypes = {
  limit: PropTypes.number,
};

export default Counter;
