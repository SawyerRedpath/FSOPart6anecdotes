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

export const displayNotification = (content, secondsDuration) => {
  return dispatch => {
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, secondsDuration * 1000)
  }
}

export default notificationSlice.reducer;