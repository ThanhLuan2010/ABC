import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewMessage: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setisNewMessage: (state, action) => {
      state.isNewMessage = action.payload;
    },
  },
});

export const chatkSelect = ({ chat }) => chat;
export const { setisNewMessage } = chatSlice.actions;

export default chatSlice.reducer;
