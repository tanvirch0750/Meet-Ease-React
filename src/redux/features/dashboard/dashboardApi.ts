/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => `/dashboard`,
      // @ts-ignore
      providesTags: ['dashboard'],
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
