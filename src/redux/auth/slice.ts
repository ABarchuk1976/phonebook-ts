import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refresh } from './operations';
import { IAuthState, IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';

export const initialState: IAuthState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn = (state: IAuthState, { payload }: {payload: IUserAuth}) => { 
	const { name, email, token } = payload;

  if (name) state.name = name;
  if (email) state.email = email;
  if (token) state.token = token;

  state.isLoggedIn = true;
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
			.addCase(refresh.fulfilled, handleIsLoggedIn)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(register.rejected, () => initialState)
      .addCase(logIn.rejected, () => initialState)
      .addCase(refresh.rejected, () => initialState)
      .addCase(refresh.pending, (state) => {
				state.isRefreshing = true;
			});
  },
});

export const authReducer = authSlice.reducer;
