import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../features/auth/authSlice';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  prepareHeaders: async (headers, { getState }) => {
    const token: string | undefined = (getState() as RootState).auth
      .accessToken;
    if (token) {
      headers.set('authorization', `bearer ${token}`);
    }
    return headers;
  },
});

//  http://localhost:5000
// 'https://room-booking-node.vercel.app/api'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }

    return result;
  },
  tagTypes: [
    'categories',
    'category',
    'rooms',
    'room',
    'slots',
    'slot',
    'users',
    'user',
    'bookings',
    'booking',
    'myBookings',
    'cqs',
    'cq',
    'dashboard',
    'reviews',
    'review',
    'reviewsByRooms',
  ],
  endpoints: () => ({}),
});
