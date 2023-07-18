/*
 * @Author: 二师弟
 * @Date: 2023-06-16 21:45:51
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 18:22:43
 * @Description: 前端权限路由
 */
import Page from "../../../views/Permission/Back/Page"
import Btn from "../../../views/Permission/Back/Page"
import AuthPage from "../../../views/Permission/Back/Page"

const Back = {
	path: "back",
	pathname: "Back",
	key: "/back",
	title: "基于后台权限",
	children: [
		{
			path: "back-page",
			pathname: "Back-Page",
			key: "/back-page",
			element: <Page />,
			title: "页面权限",
		},
		{
			path: "back-btn",
			pathname: "Back-Btn",
			key: "/back-btn",
			element: <Btn />,
			title: "按钮权限",
		},
		{
			path: "back-auth-page",
			pathname: "Back-AuthPage",
			key: "/back-auth-page",
			element: <AuthPage />,
			title: "权限测试页",
		},
	],
}

export default Back
