import React, { useContext, useEffect } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";

const ReduxCounterContext = React.createContext(null);

export const ReduxCounterProvider = ({ children, store }) => {
  const forceUpdate = useForceUpdate();
  console.log("Update");
  useEffect(() => {
    store.subscribe(() => {
      console.log("subscribe");
      forceUpdate();
    });
  }, []);

  return (
    <ReduxCounterContext.Provider value={{ ...store }}>
      {children}
    </ReduxCounterContext.Provider>
  );
};
