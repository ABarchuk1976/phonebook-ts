import { RootState } from '../store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectName = (state: RootState) => state.auth.user.name;
export const selectEmail = (state: RootState) => state.auth.user.email;
export const selectToken = (state: RootState) => state.auth.user.token;