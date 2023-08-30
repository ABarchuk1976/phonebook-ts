import { RootState } from '../store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectName = (state: RootState) => state.auth.name;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;