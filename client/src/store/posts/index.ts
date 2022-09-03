import { Post } from '@/types/posts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../index'

import { CreatePost } from '@/types/posts'
import { CreatePostResponse } from '@/types/store'

const postsApi = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({
		baseUrl: ' http://localhost:4444',
		prepareHeaders: (headers, { getState }) => {
			//@ts-ignore
			const token = (getState() as RootState).auth.token

			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}

			return headers
		},
	}),

	endpoints: (builder) => ({
		getPosts: builder.query<Post[], string>({
			query: () => 'posts/all',
		}),
		getTags: builder.query<string[], string>({
			query: () => 'posts/tags',
		}),

		createPost: builder.mutation<CreatePostResponse, CreatePost>({
			query: (credentials) => ({
				url: '/posts/create',
				method: 'POST',
				body: credentials,
			}),
		}),

		upload: builder.mutation<any, any>({
			query: (credentials) => ({
				url: 'upload',
				method: 'POST',

				body: credentials,
			}),
		}),
	}),
})

export const {
	useGetPostsQuery,
	useGetTagsQuery,
	useCreatePostMutation,
	useUploadMutation,
} = postsApi

export default postsApi
