import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operations';
import { ICredentials, IAuthState } from '../../helpers/interfaces/auth/authInterfaces';

const initialState: IAuthState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn = (state: IAuthState, { payload }: { payload: ICredentials}) => {
	const { name, email, token } = payload;

  if (name) state.name = name;
  if (email) state.email = email;
  if (token) state.token;

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
      .addCase(logOut.fulfilled, state => state = {...initialState})
      .addCase(refreshUser.pending, state => state.isRefreshing = true)
      .addCase(refreshUser.rejected, state => state.isRefreshing = false)
      .addCase(refreshUser.fulfilled, (state, { payload }: { payload: PayloadAction["payload"] }) => {

				console.log("2. Payload token: ", payload);
        state.token = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
