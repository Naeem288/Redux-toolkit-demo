import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    addFive(state) {
      state.count += 5;
    },
  },
});

export const { increment, decrement, reset, addFive } = counterSlice.actions;

export default counterSlice.reducer;
