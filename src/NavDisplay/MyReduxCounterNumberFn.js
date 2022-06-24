import { store } from "../Store/reduxCounterStore";
import React, { useEffect } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";
import { useSelector, useDispatch } from "react-redux";
const MyReduxCounterNumberFn = () => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(() => {
      console.log("subscribe");
      forceUpdate();
    });
  }, []);

  const reduxCounterV1 = useSelector((state) => state.reduxCounter.value);

  return (
    <span>
      <p> MyReduxFNV1: {reduxCounterV1} </p>
    </span>
  );
};

export default MyReduxCounterNumberFn;
