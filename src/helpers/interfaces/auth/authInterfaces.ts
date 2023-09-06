export interface IUser {
	id: string;
	name: string;
	email: string;
}

export interface IUserAuth extends IUser {
	token: string;
	password: string;
}
export interface IAuthState {
	user: Pick<IUserAuth, 'name' | 'email' | 'token'> | {name: null, email: null, token: null};
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export type Credentials = Partial<Pick<IUserAuth, 'name' | 'email' | 'password' | 'token'>>;
