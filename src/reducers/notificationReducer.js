import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
  message: ''
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.message = action.payload
      state.display = true
    },
    hideNotification(state) {
      state.message = ''
      state.display = false
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions

export default notificationSlice.reducer;