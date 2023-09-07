export interface IUser {
	id: string;
	name: string;
	email: string;
}

export interface IUserAuth extends IUser {
	token: string;
	password: string;
}

export type UserStateData = Pick<IUserAuth, 'name' | 'email' | 'token'>
export interface IAuthState {
	user: UserStateData | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export type Credentials = Partial<Pick<IUserAuth, 'name' | 'email' | 'password' | 'token'>>;
