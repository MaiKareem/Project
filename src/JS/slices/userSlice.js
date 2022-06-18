import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    logUser: (state, action) => {},
  },
});

export const { addUser, logUser } = userSlice.actions;
export default userSlice.reducer;
