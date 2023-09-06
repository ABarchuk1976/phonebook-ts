import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logOut, register, logIn, refreshUser } from './operations';
import { Credentials, IAuthState } from '../../helpers/interfaces/auth/authInterfaces';
import { UnknownAsyncThunkPendingAction } from '@reduxjs/toolkit/dist/matchers';

export const initialState: IAuthState = {
  user: {name: null, email: null, token: null},
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn: CaseReducer<IAuthState, PayloadAction<Credentials>> = (state, { payload }): void => { 
	const { name, email, token } = payload;

  if (name) state.user.name = name;
  if (email) state.user.email = email;
  if (token) state.user.token = token;

  state.isLoggedIn = !!token;
	state.isRefreshing = false;
};

const handlePending: CaseReducer<IAuthState> = (state): void => {
	state.isRefreshing = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(register.fulfilled, handleIsLoggedIn)
      .addCase(logIn.fulfilled, handleIsLoggedIn)
      .addCase(refreshUser.fulfilled, handleIsLoggedIn)
			.addMatcher((action: UnknownAsyncThunkPendingAction) => action.type.endsWith('/pending') && action.type.startsWith('auth'), handlePending)
			.addMatcher((action: UnknownAsyncThunkPendingAction) => action.type.endsWith('/rejected') && action.type.startsWith('auth'), () => initialState)
  },
});

export const authReducer = authSlice.reducer;
