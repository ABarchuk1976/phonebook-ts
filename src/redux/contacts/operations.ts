import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IContact } from '../../helpers/interfaces/contacts/contactsInterfaces';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IContact[]>('/contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData: Partial<IContact>, thunkAPI) => {
    try {
      const { data } = await axios.post<IContact>('/contacts', contactData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: Partial<IContact>['id'], thunkAPI) => {
    try {
			if (!contactId) {
				throw new Error("No contact id to delete.");
			}

      await axios.delete(`/contacts/${contactId}`);

      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData: Partial<IContact>, thunkAPI) => {
    try {
			const { id, name: newName, number: newNumber } = contactData;

			if (!id) {
				throw new Error("No contact id to delete.");
			}

			const name = newName ? newName : '';
			const number = newNumber ? newNumber : '';

      const { data } = await axios.patch<IContact>(`/contacts/${id}`, {
        name,
        number,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
