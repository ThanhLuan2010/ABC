import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataHistory: [
    {
      id: "abc",
      type: "DOWN",
      time: "16:00",
      date: "10/10/2023",
      amount: 100000,
      name: "VU THI NGOC NGA",
      description: "VU THI NGOC NGA CHUYEN KHOAN-160224-16:20:12 858946",
      recive: {
        name: "VU THI NGOC NGA",
        stk: "12345678",
        bank_name: "VIETCOMBANK - NH TMCP NGOAI THUONG",
      },
      transaction_code: "2511",
    },
    {
      id: "abd",
      type: "UP",
      time: "16:00",
      date: "10/10/2023",
      amount: 100000,
      name: "VU THI NGOC NGA",
      description: "HBCTY TNHH SX TM DV DAU TU NPT TT LUONG THANG 1.2024",
      recive: {
        name: "VU THI NGOC NGA",
        stk: "12345678",
        bank_name: "VIETCOMBANK - NH TMCP NGOAI THUONG",
      },
      transaction_code: "2511",
    },
    {
      id: "abe",
      type: "UP",
      time: "16:00",
      date: "10/10/2023",
      amount: 100000,
      name: "VU THI NGOC NGA",
      description: "HBCTY TNHH SX TM DV DAU TU NPT TT LUONG THANG 1.2024",
      recive: {
        name: "VU THI NGOC NGA",
        stk: "12345678",
        bank_name: "VIETCOMBANK - NH TMCP NGOAI THUONG",
      },
      transaction_code: "2511",
    },
  ],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setDataHistory: (state, action) => {
      state.dataHistory = action.payload;
    },
  },
});

export const historySelect = ({ history }) => history;
export const { setDataHistory } = historySlice.actions;

export default historySlice.reducer;
