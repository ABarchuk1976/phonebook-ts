import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operations';

const initialState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn = (state, { payload }) => {
	const { name, email, token } = payload;

  state.name = name;
  state.email = email;
  state.token = token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleIsLoggedIn)
      .addCase(logIn.fulfilled, handleIsLoggedIn)
      .addCase(logOut.fulfilled, state => {
        state.name = initialState.name;
        state.email = initialState.email;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
