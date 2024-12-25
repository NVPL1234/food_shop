import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { update } = activePageSlice.actions

export default activePageSlice.reducer