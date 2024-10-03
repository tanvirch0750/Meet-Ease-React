/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../../api/apiSlice';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (options: any) => {
        let queryString = '/user';

        if (options.page || options.limit || options.searchTerm) {
          queryString += '?';

          if (options.page) {
            queryString += `page=${options.page}&`;
          }

          if (options.limit) {
            queryString += `limit=${options.limit}&`;
          }

          if (options.searchTerm) {
            queryString += `searchTerm=${options.searchTerm}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        return queryString;
      },

      providesTags: ['users'],
    }),

    getUser: builder.query({
      query: (id: string) => `/user/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'user', id: arg }],
    }),

    getProfileData: builder.query({
      query: () => `/user/profile`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'user', id: arg }],
    }),

    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'users',
        'dashboard',
        { type: 'user', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetProfileDataQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
} = userApi;
