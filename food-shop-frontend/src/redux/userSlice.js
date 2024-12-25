import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    userId: 0,
    token: '',
    roleId: 0
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    save: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { save } = userSlice.actions

export default userSlice.reducer