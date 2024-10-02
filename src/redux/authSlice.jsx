import Login from "@/app/component/Login";
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isauthenticated: false,
    users: [],
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
      state.isauthenticated = true;
      state.user = action.payload;
    },
    login: (state, action) => {
      const foundUser = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (foundUser) {
        state.user = foundUser; // Set the logged-in user
        state.isauthenticated = true; // Set authenticated to true
      } else {
        state.isauthenticated = false; // Ensure this is set to false if login fails
      }
    },
    logout: (state) => {
      state.user = null;
      state.isauthenticated = false;
    },
  },
});
export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
