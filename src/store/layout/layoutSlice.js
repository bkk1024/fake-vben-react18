import { createSlice } from "@reduxjs/toolkit"

const layoutSlice = createSlice({
	name: "layout",
	initialState: {
		isCollapsed: false,
	},
	reducers: {
		setIsCollapsed(state, action) {
			state.isCollapsed = !state.isCollapsed
		},
	},
})

export const { setIsCollapsed } =
	layoutSlice.actions
export const { reducer: layoutReducer } =
	layoutSlice
