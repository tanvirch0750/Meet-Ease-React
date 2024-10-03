import { api } from '../../api/apiSlice';

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCaegories: builder.query({
      query: (options: any) => {
        let queryString = '/category';

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

      providesTags: ['categories'],
    }),
    getCategory: builder.query({
      query: (id: string) => `/category/${id}`,
      // @ts-ignore
      providesTags: (result, error, arg) => [{ type: 'category', id: arg }],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/category`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['categories'],
    }),
    editCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: 'PUT',
        body: data,
      }),
      // @ts-ignore
      invalidatesTags: (result, error, arg) => [
        'categories',
        { type: 'category', id: arg.id },
      ],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categories'],
    }),
  }),
});

export const {
  useGetCaegoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
