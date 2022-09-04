import { Post, PostState } from '@/types/posts'
import { AuthState } from '@/types/store'
import { User } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: PostState = {
	posts: [],
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state: PostState, action: PayloadAction<Post[]>) => {
			state.posts = action.payload
		},
	},
	extraReducers: (builder) => {},
})

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer
