/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bookings', 'slots'],
    }),
  }),
});

export const { useAddBookingMutation } = bookingApi;
