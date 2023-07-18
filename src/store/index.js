/*
 * @Author: 二师弟
 * @Date: 2023-06-17 13:12:54
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 16:39:31
 * @Description: 描述
 */
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query/index"
import { layoutReducer } from "./layout/layoutSlice"
import userSlice from "./user/userSlice"
import loginApi from "./api/login/login"
import { Step1SliceReducer } from "./form/step1"

const store = configureStore({
	reducer: {
		layout: layoutReducer,
		user: userSlice.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		formStep1: Step1SliceReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware),
})

setupListeners(store.dispatch)

export default store
