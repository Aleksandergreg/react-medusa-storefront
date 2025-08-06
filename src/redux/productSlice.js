import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedProduct: {}, // Add state for the selected product
};

const productSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // New reducer for setting the selected product
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // New reducer to clean up when we leave the detail page
    removeSelectedProduct: (state) => {
        state.selectedProduct = {};
    }
  },
});

export const { setProducts, selectProduct, removeSelectedProduct } = productSlice.actions;
export default productSlice.reducer;