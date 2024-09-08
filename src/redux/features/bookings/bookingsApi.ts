/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (options: any) => {
        let queryString = '/bookings';

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

      providesTags: ['myBookings', 'bookings'],
    }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bookings', 'slots', 'myBookings'],
    }),
    cancelBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings/cancel-booking`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bookings', 'slots', 'booking', 'myBookings'],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
} = bookingApi;
