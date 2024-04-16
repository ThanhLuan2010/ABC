import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewNoti: false,
};

export const notiSlice = createSlice({
  name: "noti",
  initialState,
  reducers: {
    setisNewNoti: (state, action) => {
      state.isNewNoti = action.payload;
    },
  },
});

export const notiSelect = ({ noti }) => noti;
export const { setisNewNoti } = notiSlice.actions;

export default notiSlice.reducer;
