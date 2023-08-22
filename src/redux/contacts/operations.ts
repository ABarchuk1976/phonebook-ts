import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContactData, IContactItem } from '../../helpers/interfaces/contacts/contactsInterfaces';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IContactItem[]>('/contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData: IContactData, thunkAPI) => {
    try {
      const { data } = await axios.post<IContactItem>('/contacts', contactData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: IContactData['id'], thunkAPI) => {
    try {
			if (!contactId) {
				throw new Error("No contact id to delete.");
			}

      const { data } = await axios.delete<IContactItem>(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData: IContactData, thunkAPI) => {
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
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
