import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '', 
  jwt: ''
}

export const jwtSlice = createSlice({
  name: 'jwt',
  initialState,
  reducers: {
    updateJWT: (state, action) => {
      state.jwt = action.payload.jwt;
      state.username = action.payload.username;
    }
  }
});

export const { updateJWT } = jwtSlice.actions;
export default jwtSlice.reducer;