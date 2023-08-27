import { StringNull } from "../common/types";

export interface IUser {
	name: string;
	email: string;
	password: string;
	_id: string;
}

export interface IUserAuth extends IUser {
	token: string;
}
export interface IAuthState {
	name: StringNull;
	email: StringNull;
	token: StringNull;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

