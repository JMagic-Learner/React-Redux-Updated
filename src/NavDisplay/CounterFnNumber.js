import React from "react";

import { useSelector, useDispatch } from "react-redux";
const CounterFnNumber = () => {
  const count = useSelector((state) => state.counter.value);
  return <span>{count}</span>;
};

export default CounterFnNumber;
