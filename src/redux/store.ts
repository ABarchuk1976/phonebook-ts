import { $CombinedState, combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState> & {
  readonly [$CombinedState]?: undefined;
};

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
