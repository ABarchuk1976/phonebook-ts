import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logOut, register, logIn, refreshUser } from './operations';
import { IAuthState, IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';
import { UnknownAsyncThunkPendingAction } from '@reduxjs/toolkit/dist/matchers';



export const initialState: IAuthState = {
  name: null, 
	email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleIsLoggedIn: CaseReducer<IAuthState, PayloadAction<Partial<IUserAuth>>> = (state, { payload }): void => { 
	const { name, email, token } = payload;

  if (name) state.name = name;
  if (email) state.email = email;
  if (token) state.token = token;

  state.isLoggedIn = !!token;
	state.isRefreshing = false;

	console.log("0. Return data: ", payload);
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
