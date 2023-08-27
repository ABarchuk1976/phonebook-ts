import { StringNull } from "../common/types";

export interface IContact {
	id: string;
	name: string;
	number?: string;
	owner: string;
}
export interface IContactsState {
	items: IContact[];
  isLoading: boolean;
  error: StringNull;
}