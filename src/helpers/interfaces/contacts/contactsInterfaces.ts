export interface IContact {
	id: string;
	name: string;
	number: string;
}

export interface IContactData extends IContact {
	owner: string;
}
export interface IContactsState {
	items: IContactData[];
  isLoading: boolean;
  error: string | null;
}