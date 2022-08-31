import { Post } from '@/types/posts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const postsApi = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:4444' }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => 'posts/all',
		}),
	}),
})

export const { useGetPostsQuery } = postsApi

export default postsApi
