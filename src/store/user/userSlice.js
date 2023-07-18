/*
 * @Author: 二师弟
 * @Date: 2023-06-18 22:25:47
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-19 18:28:28
 * @Description: user信息的RTK切片
 */
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: () => {
		const token =
			localStorage.getItem("token") || ""
		const user =
			JSON.parse(localStorage.getItem("user")) ||
			null
		const isLogged = token ? true : false

		return {
			token,
			isLogged,
			user,
		}
	},
	reducers: {
		login(state, action) {
			state.isLogged = true
			state.token = action.payload.token
			state.user = action.payload.user
			if (action.payload.isSave) {
				localStorage.setItem("token", state.token)
				localStorage.setItem(
					"user",
					JSON.stringify(state.user)
				)
			} else {
				sessionStorage.setItem("token", state.token)
				sessionStorage.setItem(
					"user",
					JSON.stringify(state.user)
				)
			}
		},
		logout(state, action) {
			state.isLogged = false
			state.token = ""
			state.user = null
			localStorage.removeItem("token")
			localStorage.removeItem("user")
			sessionStorage.removeItem("token")
			sessionStorage.removeItem("user")
			sessionStorage.removeItem("ok")
		},
		setIsLogged(state, action) {
			state.isLogged = action.payload.isLogged
		},
	},
})

export const { login, logout, setIsLogged } =
	userSlice.actions
export default userSlice
