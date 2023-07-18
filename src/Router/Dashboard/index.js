/*
 * @Author: 二师弟
 * @Date: 2023-06-16 20:21:15
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-29 19:35:22
 * @Description: Dashboard 的路由详情
 */
import { DashboardOutlined } from "@ant-design/icons"
import Analysis from "../../views/Dashboard/Analysis/Analysis"
import Workbench from "../../views/Dashboard/Workbench/Workbench"

const DashBoard = {
	path: "/dashboard",
	pathname: "Dashboard",
	key: "/dashboard",
	title: "Dashboard",
	icon: DashboardOutlined,
	children: [
		{
			path: "analysis",
			pathname: "Analysis",
			key: "/analysis",
			title: "分析页",
			element: <Analysis />,
		},
		{
			path: "workbench",
			pathname: "Workbench",
			key: "/workbench",
			title: "工作台",
			element: <Workbench />,
		},
	],
}

export default DashBoard
