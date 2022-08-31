import { Post } from '@/types/posts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../index'

const postsApi = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({
		baseUrl: ' http://localhost:4444',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token

			if (token) {
				headers.set('authentication', `Bearer ${token}`)
			}

			return headers
		},
	}),

	endpoints: (builder) => ({
		getPosts: builder.query<Post[], string>({
			query: () => 'posts/all',
		}),
	}),
})

export const { useGetPostsQuery } = postsApi

export default postsApi
