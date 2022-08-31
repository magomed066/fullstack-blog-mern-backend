import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import auth from './auth/auth-slice'
import postsApi from './posts'

const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		auth,
	},
})

export type RootState = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<Dispatch>()

export default store
