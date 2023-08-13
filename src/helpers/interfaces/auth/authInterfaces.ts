export type StringNull = string | null;

export interface IAuthPayload {
	name: StringNull;
	email: StringNull;
	token?: StringNull;
}

export interface IAuthState extends IAuthPayload {
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

