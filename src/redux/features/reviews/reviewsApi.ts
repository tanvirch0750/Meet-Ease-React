/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '../../api/apiSlice';

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (options: any) => {
        let queryString = '/review';

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

      providesTags: ['reviews'],
    }),
    getReviewsByRoom: builder.query({
      query: (id: string) => `/review/room/${id}`,
      // @ts-ignore
      providesTags: ['reviewsByRooms'],
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: `/review`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviewsByRooms', 'reviews'],
    }),
    getReview: builder.query({
      query: (id: string) => `/review/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'review', id: arg }],
    }),
    getReviewStat: builder.query({
      query: (id: string) => `/review/review-stat/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'review', id: arg }],
    }),
    editReviw: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'reviws',
        { type: 'review', id: arg.id },
      ],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['reviews', 'reviewsByRooms'],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useDeleteReviewMutation,
  useEditReviwMutation,
  useGetReviewsQuery,
  useGetReviewsByRoomQuery,
  useGetReviewQuery,
  useGetReviewStatQuery,
} = reviewApi;
