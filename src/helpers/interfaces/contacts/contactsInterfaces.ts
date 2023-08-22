import { StringNull } from "../common/types";

export interface IContactItem {
	id: string;
	name: string;
	number?: string;
	owner: string;
} 

export interface IContactData {
	id?: string;
	name?: string;
	number?: string;
}

export interface IContactsState {
	items: IContactItem[];
  isLoading: boolean;
  error: StringNull;
}