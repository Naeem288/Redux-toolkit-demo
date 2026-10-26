import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    blog: blogReducer,
  },
});
