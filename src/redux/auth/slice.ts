import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operations';
import { IAuthState, IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';

const initialState: IAuthState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn = (state: IAuthState, { payload }: { payload: IUserAuth}) => {
	const { name, email, token } = payload;

  if (name) state.name = name;
  if (email) state.email = email;
  if (token) state.token = token;

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
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true;
			})
      .addCase(refreshUser.rejected, (state) => {
				state.isRefreshing = false;
			})
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
