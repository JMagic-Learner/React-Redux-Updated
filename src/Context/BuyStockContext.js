import React, { useContext } from "react";
import { useCounter } from "../hooks/useCounter";
import { getInitStockInfo } from "../api/stock.api";
import { useLoading } from "../hooks/useLoading";
import { useEffect } from "react";
const BuyStockContext = React.createContext(null);

export const withBuyStockContext = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    static contextType = BuyStockContext;

    render() {
      return <WrappedComponent {...this.props} {...this.context} />;
    }
  };
};

export const useBuyStockContext = () => {
  return useContext(BuyStockContext);
};

export const BuyStockContextProvider = (props) => {
  const [stockAmount, buyStock, sellStock, setStockOption] = useCounter();
  const [isLoading, startLoading, endLoading, showLoading] = useLoading(false);
  useEffect(() => {
    startLoading();
    getInitStockInfo().then((option) => {
      //console.log(option)
      setStockOption(option);
      endLoading();
    });
  }, []);

  return (
    <BuyStockContext.Provider
      value={{
        stockAmount,
        buyStock,
        sellStock,
        isLoadingStockAmount: isLoading,
        showLoading: () => showLoading("spinner")
      }}
    >
      {props.children}
    </BuyStockContext.Provider>
  );
};
