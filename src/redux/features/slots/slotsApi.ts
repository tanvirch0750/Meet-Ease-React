/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const slotsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (options: any) => {
        let queryString = '/slots';

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

      providesTags: ['slots'],
    }),
    getAvailableSlots: builder.query({
      query: (options: any) => {
        console.log(options);
        let queryString = '/slots/availability';

        if (
          options.page ||
          options.limit ||
          options.searchTerm ||
          options.date ||
          options.roomId
        ) {
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

          if (options.roomId) {
            queryString += `roomId=${options.roomId}&`;
          }

          if (options.date) {
            queryString += `date=${options.date}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        console.log(queryString);

        return queryString;
      },

      providesTags: ['slots'],
    }),
    getSlot: builder.query({
      query: (id: string) => `/slots/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'slot', id: arg }],
    }),
    addSlot: builder.mutation({
      query: (data) => ({
        url: `/slots`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['slots'],
    }),
    editSlot: builder.mutation({
      query: ({ id, data }) => ({
        url: `/slots/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'slots',
        { type: 'slot', id: arg.id },
      ],
    }),
    deleteSlot: builder.mutation({
      query: (id) => ({
        url: `/slots/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['slots'],
    }),
  }),
});

export const {
  useGetSlotQuery,
  useGetSlotsQuery,
  useAddSlotMutation,
  useEditSlotMutation,
  useDeleteSlotMutation,
  useGetAvailableSlotsQuery,
} = slotsApi;
