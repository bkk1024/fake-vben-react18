/*
 * @Author: 二师弟
 * @Date: 2023-06-19 14:07:54
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 16:14:26
 * @Description: 登录注册接口书写处，这里是fakeurl
 */
import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query"

const loginApi = createApi({
	reducerPath: "loginApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:1337/api/",
	}),
	endpoints: (build) => {
		return {
			login: build.mutation({
				query(user) {
					return {
						url: "auth/local",
						method: "post",
						bady: user,
					}
				},
			}),
			register: build.mutation({
				query(user) {
					return {
						url: "auth/local/register",
						method: "post",
						body: user,
					}
				},
			}),
		}
	},
})

export const {
	useLoginMutation,
	useRegisterMutation,
} = loginApi
export default loginApi
