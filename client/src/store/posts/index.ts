import { DeletePost, Post } from '@/types/posts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../index'

import { CreatePost } from '@/types/posts'
import {
	CreatePostResponse,
	DeletePostResponse,
	GetPostByIdResponse,
} from '@/types/store'

const postsApi = createApi({
	reducerPath: 'postsApi',
	tagTypes: ['Post'],
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
			providesTags: ['Post'],
		}),
		getTags: builder.query<string[], string>({
			query: () => 'posts/tags',
			providesTags: ['Post'],
		}),

		createPost: builder.mutation<CreatePostResponse, CreatePost>({
			query: (credentials) => ({
				url: '/posts/create',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['Post'],
		}),

		deletePost: builder.mutation<DeletePostResponse, DeletePost>({
			query: (id) => ({
				url: `posts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'],
		}),

		getPostById: builder.query<GetPostByIdResponse, string>({
			query: (id) => `posts/${id}`,
			providesTags: ['Post'],
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
	useDeletePostMutation,
	useGetPostByIdQuery,
} = postsApi

export default postsApi
