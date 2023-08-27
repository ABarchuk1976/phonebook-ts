import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../filter/selectors';

import { RootState } from '../store';
import { IContact } from '../../helpers/interfaces/contacts/contactsInterfaces';

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  selectContacts, 
	selectFilter,
  (items: IContact[], filter: string) => !items
		? []
		: items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);
