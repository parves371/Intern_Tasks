import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("authToken"), // Check if authToken exists
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      const token = action.payload; // Get token from action payload
      localStorage.setItem("authToken", token); // Store the token in localStorage
      state.isAuthenticated = true; // Set the authenticated state to true
    },
    handleLogout: (state) => {
      localStorage.removeItem("authToken"); // Remove token from localStorage
      state.isAuthenticated = false; // Set the authenticated state to false
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, handleLogout } = authSlice.actions;

export default authSlice.reducer;
