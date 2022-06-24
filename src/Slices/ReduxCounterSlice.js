import { createSlice } from "@reduxjs/toolkit";

export const ReduxSlice = createSlice({
  name: "reduxCounter",
  initialState: {
    value: 0
  },
  reducers: {
    incrementV1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrementV1: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  incrementV1,
  decrementV1,
  incrementByAmount
} = ReduxSlice.actions;

export default ReduxSlice.reducer;
