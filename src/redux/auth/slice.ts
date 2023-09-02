import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operations';
import { IAuthState, IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';

export const initialState: IAuthState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn = (state: IAuthState, { payload }: {payload: unknown}) => { 
	const { name, email, token } = payload as IUserAuth;

  if (name) state.name = name;
  if (email) state.email = email;
  if (token) state.token = token;

  state.isLoggedIn = !!token;
	state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleIsLoggedIn)
      .addCase(logIn.fulfilled, handleIsLoggedIn)
			.addCase(refreshUser.fulfilled, handleIsLoggedIn)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(register.rejected, () => initialState)
      .addCase(logIn.rejected, () => initialState)
      .addCase(refreshUser.rejected, () => initialState)
      .addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true;
			});
  },
});

export const authReducer = authSlice.reducer;
