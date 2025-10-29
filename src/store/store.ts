import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import notesSliceReducer from './stores/notesSlice';

//  Configuration for redux-persist to store the state in AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

//  Combine all slice reducers into a single root reducer
const rootReducer = combineReducers({
  notes: notesSliceReducer,
});

//  Wrap root reducer with persistence capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

//  Configure the Redux store with middleware and persisted reducer
const store = configureStore({ // We will use the "persistent reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

//  Create persistor for redux-persist (used in app entry)
export const persistor = persistStore(store);

//  Export store instance (used by Provider in App.tsx)
export default store;

//  Infer RootState and AppDispatch types for typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
