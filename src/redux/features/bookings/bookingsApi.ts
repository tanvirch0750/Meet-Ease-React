import { api } from '../../api/apiSlice';

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (options: Record<string, unknown>) => {
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
      invalidatesTags: ['bookings', 'slots', 'myBookings', 'dashboard'],
    }),
    cancelBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings/cancel-booking`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [
        'bookings',
        'slots',
        'booking',
        'myBookings',
        'dashboard',
      ],
    }),
    isReviewAdded: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bookings/review-added/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['bookings', 'myBookings'],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
  useIsReviewAddedMutation,
} = bookingApi;
