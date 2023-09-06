import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IContactData } from '../../helpers/interfaces/contacts/contactsInterfaces';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await axios.get<IContactData[]>('/contacts');

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData: Pick<IContactData, 'name' | 'number'>, {rejectWithValue}) => {
    try {
      const { data } = await axios.post<IContactData>('/contacts', contactData);

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: string, {rejectWithValue}) => {
    try {
			if (!id) {
				throw new Error("No contact id to delete.");
			}

      await axios.delete(`/contacts/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData: Pick<IContactData, 'name' | 'number' | 'id'>, {rejectWithValue}) => {
    try {
			const { id, name: newName, number: newNumber } = contactData;

			if (!id) {
				throw new Error("No contact id to delete.");
			}

			const name = newName ? newName : '';
			const number = newNumber ? newNumber : '';

      const { data } = await axios.patch<IContactData>(`/contacts/${id}`, {
        name,
        number,
      });

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
