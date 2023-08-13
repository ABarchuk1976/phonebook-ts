import { createSlice } from '@reduxjs/toolkit';

import { toastError } from '../../components/Layout';
import { logOut } from '../../redux/auth/operations';

import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = ({ isLoading }) => {
  isLoading = true;
};

const handleRejected = ({ error, isLoading }, { payload }) => {
  error = payload;
  isLoading = false;
  toastError('Something went wrong.');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.rejected, handleRejected)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const { id, name, number } = payload;
        const idx = state.items.findIndex(contact => contact.id === id);
        state.items[idx] = { id, name, number };
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
