/*
 * @Author: 二师弟
 * @Date: 2023-06-19 15:22:42
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-01 13:56:41
 * @Description: 用于在每个路由组件进入前判断登录是否过期
 */
import React from "react"
import { Navigate } from "react-router-dom"
import { setIsLogged } from "../store/user/userSlice"
import {
	useDispatch,
	// useSelector,
} from "react-redux"
import {
	useLocation,
	// useNavigate,
} from "react-router-dom"
import MyLayout from "../Layout/MyLayout"
import Login from "../views/Login/Login"
import Home from "../views/Home/Home"

const Expired = (props) => {
	const location = useLocation()
	// const nav = useNavigate()
	const dispatch = useDispatch()

	const isExpried = () => {
		const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"))
		const ok = sessionStorage.getItem("ok")
		if (!user) return true
		const timeExpired = user.expired - user.save
		const nowExpired = new Date().getTime() - user.save
		if (!ok) {
			// 除了第一次进入，其余时候不需要判断 token 是否过期
			if (nowExpired > timeExpired) {
				// token 过期
				dispatch(
					setIsLogged({
						isLogged: false,
					})
				)
				localStorage.removeItem("token")
				localStorage.removeItem("user")
				return true
			}
			sessionStorage.setItem("ok", true)
			return false
		}
		return false
	}

	const component = () => {
		if (isExpried()) {
			// token 过期
			if (location.pathname === "/login") {
				return <Login />
			}

			sessionStorage.removeItem("inputUrl")
			sessionStorage.setItem("inputUrl", location.pathname)
			return <Navigate to={"/login"} state={{ fromPath: location.pathname }} replace />
		}
		if (location.pathname === "/login") {
			return <Home />
		}
		return <MyLayout>{props.children}</MyLayout>
	}

	return <>{component()}</>
}

export default Expired
