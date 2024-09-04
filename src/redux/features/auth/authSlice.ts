/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  accessToken: string | undefined;
  email: string | undefined;
  role: string | undefined;
}

const initialState: IUser = {
  accessToken: undefined,
  email: undefined,
  role: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state: IUser, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.email = undefined;
      state.role = undefined;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
