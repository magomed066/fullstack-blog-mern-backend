import { AuthResponse } from '@/types/store'
import { Login } from '@/types/user'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authApi = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:4444' }),
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, Login>({
			query: (credentials) => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApi

export default authApi
