import React, { useContext } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterContext = React.createContext(null);

export const withCounterContext = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    static contextType = CounterContext;
    render() {
      const [count, handleAdd, handleSub, handleSetOption] = this.context;
      return (
        <WrappedComponent
          {...this.props}
          count={count}
          handleAdd={handleAdd}
          handleSub={handleSub}
          handleSetOption={handleSetOption}
        />
      );
    }
  };
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const CounterContextProvider = (props) => {
  const [count, increment, decrement, setOption] = useCounter();

  return (
    <CounterContext.Provider value={[count, increment, decrement, setOption]}>
      {props.children}
    </CounterContext.Provider>
  );
};
