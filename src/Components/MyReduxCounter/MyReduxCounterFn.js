import React, { useEffect } from "react";
import { store } from "../../Store/reduxCounterStore";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { useSelector, useDispatch } from "react-redux";
import { incrementV1, decrementV1 } from "../../Slices/ReduxCounterSlice";
const MyReduxCounterFn = () => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(() => {
      console.log("subscribe");
      forceUpdate();
    });
  }, []);
  const reduxCounter = useSelector((state) => state.reduxCounter.value);
  const dispatch = useDispatch();

  console.log("reduxCounter", store.getState().reduxCounter);
  return (
    <section>
      <h1> MyReduxCounterFn (using Redux) </h1>
      <header>
        Using store.getState().reduxCounter:{store.getState().reduxCounter}{" "}
      </header>

      <button
        onClick={() => {
          store.dispatch({ type: "reduxCounter/incremented" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "reduxCounter/decremented" });
        }}
      >
        -
      </button>

      <header> Testing another way to click dispatch </header>
      <header>Using useSelector:{reduxCounter}</header>
      <button onClick={() => dispatch(incrementV1())}>+</button>
      <button onClick={() => dispatch(decrementV1())}>-</button>
    </section>
  );
};

export default MyReduxCounterFn;
