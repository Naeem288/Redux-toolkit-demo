import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Naeem",
  role: "Student",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});
export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
