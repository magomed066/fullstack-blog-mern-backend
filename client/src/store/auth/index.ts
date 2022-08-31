import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authApi = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:4444' }),
	endpoints: (builder) => ({
		isAuth: builder.query({
			query() {
				return ''
			},
		}),
	}),
})

export const { useIsAuthQuery } = authApi

export default authApi
