import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")) : [];

export const CarritoSlices = createSlice({

  name: "CarritoSlices",
  initialState,
  reducers: {

    addToCart: (state, { payload }) => {

      const productExistente = state.findIndex((product) => product._id === payload._id);

      if (productExistente >= 0) {
        state[productExistente].cantidad += 1;
      } else {
        state.push({ ...payload, cantidad: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state));

    },
    removeCart: (state, { payload }) => {

      const product = state.findIndex((product) => product._id === payload._id);

      if (state[product].cantidad < 2) {
        
        const newValor = state.filter((valor) => valor._id !== state[product]._id);
        
        localStorage.setItem("cartItems", JSON.stringify(newValor));

        return state=newValor;
      
      } else {

        state[product].cantidad -= 1;

        localStorage.setItem("cartItems", JSON.stringify(state));

      }
    },
    vaciarCart: (state) => {

      localStorage.clear("cartItems", JSON.stringify(state));
      return state=[];

    },
    removeItemsCart: (state, { payload }) => {

      const newValor = state.filter((product) => product._id !== payload._id);
        
      localStorage.setItem("cartItems", JSON.stringify(newValor));
      
      return state=newValor;

    }
  },
});

export const { addToCart, removeCart, vaciarCart, removeItemsCart } = CarritoSlices.actions;
export default CarritoSlices.reducer;
