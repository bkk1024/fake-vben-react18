/*
 * @Author: 二师弟
 * @Date: 2023-06-16 21:45:51
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 18:21:15
 * @Description: 前端权限路由
 */
import Page from "../../../views/Permission/Front/Page"
import Btn from "../../../views/Permission/Front/Btn"
import AuthPage from "../../../views/Permission/Front/AuthPage"

const Front = {
	path: "front",
	pathname: "Front",
	key: "/front",
	title: "基于前端权限",
	children: [
		{
			path: "front-page",
			pathname: "Front-Page",
			key: "/front-page",
			title: "页面权限",
			element: <Page />,
		},
		{
			path: "front-btn",
			pathname: "Front-Btn",
			key: "/front-btn",
			title: "按钮权限",
			element: <Btn />,
		},
		{
			path: "front-auth-page",
			pathname: "Front-AuthPage",
			key: "/front-auth-page",
			title: "权限测试页",
			element: <AuthPage />,
		},
	],
}

export default Front
