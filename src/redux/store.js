import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducers/authSlice"; // Import your auth slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth slice to the store
  },
});

export default store; // Export the store
