import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Ipost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '  http://localhost:5000'
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<Ipost[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['Post'],
    }),
    createPost: build.mutation<Ipost, Ipost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: result => ['Post'],
    }),
    updatePost: build.mutation<Ipost, Ipost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: result => ['Post'],
    }),
    removePost: build.mutation<Ipost, Ipost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: result => ['Post'],
    }),
  }),
});