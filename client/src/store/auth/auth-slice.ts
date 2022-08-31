import { AuthState } from '@/types/store'
import { User } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user')!) || null

const initialState: AuthState = {
	user: user ? user : null,
	token: user ? user.token : '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state: AuthState, action: PayloadAction<User>) => {
			state.user = action.payload
		},
		logout: (state) => {
			localStorage.removeItem('user')

			state.user = null
			state.token = ''
		},
	},
	extraReducers: (builder) => {},
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
