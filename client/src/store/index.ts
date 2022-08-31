import { configureStore } from '@reduxjs/toolkit'
import { createApi } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authApi from './auth'
import postsApi from './posts'

const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
})

type Root = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<Root> = useSelector

export default store
