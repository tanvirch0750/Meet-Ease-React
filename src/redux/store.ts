import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import authSliceReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSliceReducer,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
