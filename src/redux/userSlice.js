import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    isAuthenticated: false,
    loading: false
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    userLogout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUserData, userLogout } = userSlice.actions;
export default userSlice.reducer;