import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSearch: [],
  valueSearch: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setListSearch: (state, action) => {
      let data = state.listSearch;
      if (data?.length < 5) {
        data = data?.concat(action.payload);
      } else {
        data?.reverse()?.pop();
        data = data?.reverse()?.concat(action.payload);
      }
      state.listSearch = data;
    },
    setValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
  },
});

export const searchSelect = ({ search }) => search;
export const { setListSearch, setValueSearch } = searchSlice.actions;

export default searchSlice.reducer;
