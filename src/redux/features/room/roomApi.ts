/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const roomApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (options: any) => {
        let queryString = '/rooms';

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

      providesTags: ['rooms'],
    }),
    getRoom: builder.query({
      query: (id: string) => `/rooms/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'room', id: arg }],
    }),
    addRoom: builder.mutation({
      query: (data) => ({
        url: `/rooms`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['rooms'],
    }),
    editRoom: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rooms/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'rooms',
        { type: 'room', id: arg.id },
      ],
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['rooms'],
    }),
  }),
});

export const {
  useGetRoomQuery,
  useGetRoomsQuery,
  useAddRoomMutation,
  useEditRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
