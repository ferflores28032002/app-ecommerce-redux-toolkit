import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [], 
  isOpen: true
}

export const CarritoSlices = createSlice({

  name: "CarritoSlices",
  initialState,
  reducers: {

    addToCart: ({ cart }, { payload }) => {
      const productExistente = cart.findIndex((product) => product._id === payload._id);

      if (productExistente >= 0) {
        cart[productExistente].cantidad += 1;
      } else {
        cart.push({ ...payload, cantidad: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));

    },
    removeCart: ({ cart, isOpen }, { payload }) => {

      const product = cart.findIndex((product) => product._id === payload);

      if (cart[product].cantidad < 2) {
        
        const newValor = cart.filter((valor) => valor._id !== cart[product]._id);
        
        localStorage.setItem("cartItems", JSON.stringify(newValor));

        return {cart: newValor, isOpen}
      
      } else {

        cart[product].cantidad -= 1;

        localStorage.setItem("cartItems", JSON.stringify(cart));

      }
    },
    vaciarCart: ({ cart, isOpen }) => {

      localStorage.clear("cartItems", JSON.stringify(cart));
      return {
        cart: [],
        isOpen
      }

    },
    removeItemsCart: ({ cart, isOpen }, { payload }) => {


      const newValor = cart.filter((product) => product._id !== payload);
        
      localStorage.setItem("cartItems", JSON.stringify(newValor));
      
      return {
        cart: newValor,
        isOpen
      }

    },

    openCart: (state) => {
      state.isOpen=true
    },

    closeCart: (state) => {
      state.isOpen=false
    }
  },
});

export const { addToCart, removeCart, vaciarCart, removeItemsCart, openCart, closeCart } = CarritoSlices.actions;
export default CarritoSlices.reducer;
