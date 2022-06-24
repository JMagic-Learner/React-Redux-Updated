import React, { useEffect } from "react";
import { useLoading } from "../../hooks/useLoading";
import { useSelector, useDispatch } from "react-redux";
import { increaseStock, decreaseStock } from "../../Slices/BuyStockSlice";

const BuyStockFn = (props) => {
  const stocks = useSelector((state) => state.stocks.value);
  const dispatch = useDispatch();
  const [isLoading, startLoading, endLoading, showLoading] = useLoading(false);
  // const [
  //   stock,
  //   increaseStock,
  //   decreaseStock,
  //   setStockOption
  // ] = useBuyStockContext();
  return (
    <section>
      <h1>BuyStockFn</h1>
      {isLoading ? (
        showLoading("normal")
      ) : (
        <>
          <button onClick={() => dispatch(increaseStock())}>+</button>
          <span>{stocks}</span>
          <button onClick={() => dispatch(decreaseStock())}>-</button>
        </>
      )}
    </section>
  );
};

export default BuyStockFn;
