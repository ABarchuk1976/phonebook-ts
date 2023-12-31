import { createSlice } from '@reduxjs/toolkit';
import { UnknownAsyncThunkPendingAction } from '@reduxjs/toolkit/dist/matchers';
import { toastError } from '../../components/common.styled';

import { IContactData, IContactsState } from '../../helpers/interfaces/contacts/contactsInterfaces';
import { logOut } from '../auth/operations';

import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from './operations';

const initialState: IContactsState = {
  items: [] as IContactData[],
  isLoading: false,
  error: null,
};

const handlePending = (state: IContactsState) => {
  state.isLoading = true;
};

const handleRejected = (state: IContactsState, { payload }:{payload: IContactsState['error']}) => {
  state.error = payload;
  state.isLoading = false;

  toastError('Something went wrong.');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const { id, name, number } = payload;
        const idx = state.items.findIndex(contact => contact.id === id);
        state.items[idx].id = id;
        state.items[idx].name = name;
        state.items[idx].number = number;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
			.addMatcher((action: UnknownAsyncThunkPendingAction) => action.type.endsWith('/pending') && action.type.startsWith('contacts'), handlePending)
			.addMatcher((action: UnknownAsyncThunkPendingAction) => action.type.endsWith('/rejected') && action.type.startsWith('contacts'), handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;
