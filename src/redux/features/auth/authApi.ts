/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IAuthLogin } from '@/types/authType';
import { api } from '../../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // register endpoint
    signup: builder.mutation({
      query: (data: any) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['users', 'dashboard'],
    }),
    // login endpoint
    signin: builder.mutation({
      query: (data: IAuthLogin) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.token,
              email: result.data.data.email,
              role: result.data.data.role,
              name: result.data.data.name,
              image: result.data.data.image,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              email: result.data.data.email,
              role: result.data.data.role,
              name: result.data.data.name,
              image: result.data.data.image,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
