import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart:(state,action)=>{
        state.value.push(action.payload)
    },
    removeProductFromCart:(state,action)=>{
        state.value=state.value.filter(p=>p.id!==action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart,removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer