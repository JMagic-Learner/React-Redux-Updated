import React, { useEffect, useContext } from "react";
// import { useCounterContext } from "../../context/counterContext";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../Slices/CounterSlice";

//let counterRef;
const CounterFn = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Counterfn (Using Redux)</h1>
      <header>Using useSelector to target the counter value: {count}</header>
      {/* <button onClick={dispatch(increase())} >+</button><button onClick={dispatch(decrease())}>-</button> */}
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </section>
  );
};

export default CounterFn;
