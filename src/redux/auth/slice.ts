import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logOut, register, logIn, refreshUser } from './operations';
import { IAuthState, IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';
import { UnknownAsyncThunkPendingAction } from '@reduxjs/toolkit/dist/matchers';

export const initialState: IAuthState = {
  user: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn: CaseReducer<IAuthState, PayloadAction<IUserAuth>> = (state, { payload: {name, email, token} }): void => {

	state.user = (name && email && token) ? {...state.user, ...{name, email, token}} : null;

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
