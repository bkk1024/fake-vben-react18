/*
 * @Author: 二师弟
 * @Date: 2023-06-16 20:20:01
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 18:54:42
 * @Description: 所有路由的集合页
 */
import Expired from "../components/Expired"
import Home from "../views/Home/Home"
import Login from "../views/Login/Login"
import DashBoard from "./Dashboard"
import Permission from "./Permission"
import Feature from "./Feature"
import Page from "./Page"

const routerList = [
	{
		path: "/",
		pathname: "Home",
		title: "Home",
		key: "/",
		element: (
			<Expired>
				<Home />
			</Expired>
		),
		noMenu: true,
	},
	{
		path: "login",
		pathname: "Login",
		title: "登录",
		key: "/login",
		element: (
			<Expired>
				<Login />
			</Expired>
		),
		noMenu: true,
	},
	DashBoard,
	Permission,
	Feature,
	Page,
]

export default routerList
