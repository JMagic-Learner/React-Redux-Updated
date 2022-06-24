import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

let counterNow = 0;
export const AddCounter = (amount) => ({
  type: ADD_COUNTER,
  payload: {
    counter: counterNow + { amount }
  }
});

export const SubCounter = (amount) => ({
  type: SUB_COUNTER,
  payload: {
    counter: counterNow - { amount }
  }
});
