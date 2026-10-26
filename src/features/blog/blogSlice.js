import { createSlice } from "@reduxjs/toolkit";
import { blogsData } from "../../data/blogsData";

const initialState = blogsData
// [
//   {
//     id: 1,
//     title: "Learning Redux",
//     category: "React",
//     description: "My journey of learning Redux-Toolkit",
//     isFeatured: false,
//   },
// ];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const blog = state.find((blog) => blog.id === action.payload);

      if (blog) {
        blog.isFeatured = !blog.isFeatured;
      }
    },
  },
});
export const {addBlog, deleteBlog, toggleFeatured} = blogSlice.actions;
export default blogSlice.reducer;
