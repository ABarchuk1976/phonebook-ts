import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


import { IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';
import { API } from './constants';
import { toastError } from '../../components/common.styled';

axios.defaults.baseURL = API;

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: Partial<IUserAuth>, thunkAPI) => {
    try {
      const { data } = await axios.post<IUserAuth>('/auth/register', credentials);

      setAuthHeader(data.token);
			
      return data;
    } catch (error) {
      toastError('Something went wrong. May be such user name existed yet.');
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: Partial<IUserAuth>, thunkAPI) => {
    try {
      const { data } = await axios.post<IUserAuth>('/auth/login', credentials);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      toastError('Email or password is wrong.');
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const logOut = createAsyncThunk(
	'auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (credentials: Partial<IUserAuth>, thunkAPI) => {
    const token = credentials.token!;

			try {
				setAuthHeader(token);
	
				const { data } = await axios.get<IUserAuth>('/auth/current');

				setAuthHeader(data.token);
				
				return data;
			} catch (error) {
				return thunkAPI.rejectWithValue((error as Error).message);
			}
		}
);
