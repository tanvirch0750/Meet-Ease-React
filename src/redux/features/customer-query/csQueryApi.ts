/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const cqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCqs: builder.query({
      query: (options: any) => {
        let queryString = '/customer-query';

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

      providesTags: ['cqs'],
    }),
    getCq: builder.query({
      query: (id: string) => `/customer-query/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'cq', id: arg }],
    }),
    addCq: builder.mutation({
      query: (data) => ({
        url: `/customer-query`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cqs'],
    }),
    editCq: builder.mutation({
      query: ({ id, data }) => ({
        url: `/customer-query/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'cqs',
        { type: 'cq', id: arg.id },
      ],
    }),
    deleteCq: builder.mutation({
      query: (id) => ({
        url: `/customer-query/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cqs'],
    }),
  }),
});

export const {
  useGetCqQuery,
  useGetCqsQuery,
  useAddCqMutation,
  useEditCqMutation,
  useDeleteCqMutation,
} = cqApi;
