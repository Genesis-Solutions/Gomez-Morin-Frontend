import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [{_id: "", nombre: "Miguel"}],
  text: "Default",
  dark: true
}

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setUsers:  (state, action) => {
      state.users = action.payload
    },
    setDarkMode: (state) => {
      state.dark = !state.dark
    },
    setText: (state, action) => {
      state.text = action.payload
    }
  }
})

export const { setUsers, setDarkMode, setText } = generalSlice.actions

export default generalSlice.reducer

