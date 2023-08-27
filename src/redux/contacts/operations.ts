import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery, BaseQueryApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

import { IContact } from '../../helpers/interfaces/contacts/contactsInterfaces';
import { API } from '../auth/constants';
import { RootState } from '../store';

// export const contactsApi = createApi({
// 	reducerPath: 'contacts',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: API,
// 		prepareHeaders: (headers: Headers, { getState }: { getState: BaseQueryApi["getState"]}): void | Headers => {
// 			const token: null | string = (getState() as RootState).auth.token;
// 
// 			if (token) {
// 				headers.set('authorization', `Bearer ${token}`);
// 			} else {
// 				headers.delete('authorization')
// 			};
// 
// 			return headers;
// 		}
// 	}),
// 	tagTypes: ['contacts'],
// 	endpoints: (builder) => ({
// 		fetchContacts: builder.query<IContact[] | [], void>({
// 			query: () => ({
// 				method: 'GET',
// 				url: '/'
// 			}),
// 			providesTags: ['contacts']
// 		}),
// 		addContact: builder.mutation<IContact, Partial<IContact>>({
// 			query: (body: Partial<IContact>) => ({
// 				method: 'POST',
// 				url: '/',
// 				body,
// 			}),
// 			invalidatesTags: ['contacts'],
// 		}),
// 		editContact: builder.mutation<IContact, Partial<IContact>>({
// 			query: (body: Partial<IContact>) => ({
// 				method: 'PATCH',
// 				url: `/${body.id}`,
// 				body
// 			}),
// 			invalidatesTags: ['contacts'],
// 		}),
// 		deleteContact: builder.mutation<void, Partial<IContact>>({
// 			query: (body: Partial<IContact>) => ({
// 				method: 'DELETE',
// 				url: `/${body.id}`,
// 				body 
// 			}),
// 			invalidatesTags: ['contacts']
// 		})
// 	})
// })
// 
// export const {
// 	useFetchContactsQuery,
// 	useAddContactMutation,
// 	useEditContactMutation,
// 	useDeleteContactMutation
// } = contactsApi;

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

      const { data } = await axios.delete<IContact>(`/contacts/${contactId}`);

      return data;
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
