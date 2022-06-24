import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/CounterSlice";
import stockReducer from "../Slices/BuyStockSlice";
import reduxReducer from "../Slices/ReduxCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    stocks: stockReducer,
    reduxCounter: reduxReducer
  }
});
