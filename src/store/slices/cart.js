import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDataCart: (state, action) => {
      let data = state.dataCart;
      if (data?.length === 0) {
        data = [action.payload];
      } else {
        //check xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const check = data?.some(
          (item) =>
            item.product?.product_id === action.payload?.product?.product_id
        );

        //nếu đã tồn tại thì công số lượng lên
        if (check) {
          for (let i = 0; i < data.length; i++) {
            if (
              data[i]?.product?.product_id ===
              action.payload?.product?.product_id
            ) {
              data[i] = { ...data[i], count: data[i]?.count + 1 };
            }
          }
        } else {
          data = data?.concat(action.payload);
        }
      }
      state.dataCart = data;
    },
    deleteDataCart: (state, action) => {
      let data = state.dataCart;
      data = data?.filter(
        (item) =>
          item?.product?.product_id !== action.payload?.product?.product_id
      );
      state.dataCart = data;
    },
    increase: (state, action) => {
      let data = state.dataCart;
      for (let i = 0; i < data.length; i++) {
        if (
          data[i]?.product?.product_id === action.payload?.product?.product_id
        ) {
          data[i] = { ...data[i], count: data[i]?.count + 1 };
        }
      }
      state.dataCart = data;
    },
    reduce: (state, action) => {
      let data = state.dataCart;
      for (let i = 0; i < data.length; i++) {
        if (
          data[i]?.product?.product_id === action.payload?.product?.product_id
        ) {
          if (data[i]?.count > 1) {
            data[i] = { ...data[i], count: data[i]?.count - 1 };
          }
        }
      }
      state.dataCart = data;
    },
    clearCart: (state, action) => {
      state.dataCart = [];
    },
  },
});

export const cartSelect = ({ cart }) => cart;
export const { setDataCart, deleteDataCart, increase, reduce, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
