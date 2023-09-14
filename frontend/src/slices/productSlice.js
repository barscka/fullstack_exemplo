import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    produtcs: [],
  },
  reducers: {
    addProduct: (state, action) => {
      
      state.produtcs.push(action.payload)
    },
    removeProduct: (state) => {
      state.value -= 1
    },   
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer