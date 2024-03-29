import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "user-profile",
  initialState: {
    profileData: {
      userId: 0,
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      avtUrl: "",
    },
  },
  reducers: {
    updateUserProfile: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

export const { updateUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
