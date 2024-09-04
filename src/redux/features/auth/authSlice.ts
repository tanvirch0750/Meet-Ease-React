/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  accessToken: string | undefined;
  email: string | undefined;
  role: string | undefined;
  name: string | undefined;
  image: string | undefined;
}

const initialState: IUser = {
  accessToken: undefined,
  email: undefined,
  role: undefined,
  name: undefined,
  image: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state: IUser, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.email = undefined;
      state.role = undefined;
      state.name = undefined;
      state.image = undefined;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
