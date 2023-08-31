import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


import { IUserAuth } from '../../helpers/interfaces/auth/authInterfaces';
import { API } from './constants';
import { RootState } from '../store';
import { toastError } from '../../components/common.styled';
import { initialState } from './slice';

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

export const refresh = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;

    const persistedToken = auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue(initialState);
    }

    try {

      setAuthHeader(persistedToken);

      const { data } = await axios.get<IUserAuth>('/auth/current');
			
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
