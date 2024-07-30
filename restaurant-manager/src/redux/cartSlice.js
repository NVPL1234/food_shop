import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    save(state, action) {
      for (let index = 0; index < state.value.length; index++) {
        let cart = current(state.value[index])
        let actionOptionsLength = action.payload.options.length
        let cartOptionsLength = cart.options.length
        if (actionOptionsLength > 0 && cartOptionsLength > 0 && actionOptionsLength === cartOptionsLength) {
          let result = {}
          result = cart.options.find((option, i) => option.optionId === action.payload.options[i].optionId)
          if (cart.product.productId === action.payload.product.productId && result != undefined && cart.note === action.payload.note) {
            state.value[index].quantity = action.payload.quantity + state.value[index].quantity
            state.total = state.total + action.payload.amount
            return
          }
          else if (index == state.value.length - 1) {
            state.value = [...state.value, action.payload]
            state.total = state.total + action.payload.amount
            return
          }
        }
        else {
          if(actionOptionsLength === cartOptionsLength && cart.product.productId === action.payload.product.productId && cart.note === action.payload.note) {
            state.value[index].quantity = action.payload.quantity + state.value[index].quantity
            state.total = state.total + action.payload.amount
            return
          }
          else if (index == state.value.length - 1) {
            state.value = [...state.value, action.payload]
            state.total = state.total + action.payload.amount
            return
          }
        }
      }
      console.log("ngoai for")
      if (state.value.length == 0) {
        state.value = [...state.value, action.payload]
        state.total = state.total + action.payload.amount
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((cart, i) => i !== action.payload.index)
      state.total = state.total - action.payload.amount
    },
    update: (state, action) => {
      state.value[action.payload.index].quantity = action.payload.quantity
      state.total += action.payload.amount 
    },
    removeAll: (state, action) => {
      state.value = []
      state.total = 0
    }
  }
})

export const { save, remove, update, removeAll } = cartSlice.actions

export default cartSlice.reducer