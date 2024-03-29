import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./UserProfileSlice";

export const store = configureStore({
  reducer: {
    userProfileReducer: userProfileReducer,
  },
});
