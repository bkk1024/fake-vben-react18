/*
 * @Author: 二师弟
 * @Date: 2023-06-30 19:30:24
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:42:51
 * @Description: Workbench 右侧内容 快捷导航
 */
import React, { useEffect, useState } from "react"
import Card from "../../../../../../components/Charts/Card"
import Grid from "./../../../../../../components/Grid/Grid"

const items = [
	{
		name: "home",
		title: "首页",
	},
	{
		name: "panel",
		title: "仪表盘",
	},
	{
		name: "component",
		title: "组件",
	},
	{
		name: "setting",
		title: "系统管理",
	},
	{
		name: "permission",
		title: "权限管理",
	},
	{
		name: "chart",
		title: "图表",
	},
]

const QuickNav = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div className="mb-4">
			<Card
				title="快捷导航"
				link="https://www.tailwindcss.cn/"
				linkText="更多"
				success={isSuccess}
				skeleton={true}
			>
				<Grid items={items} icon={true} />
			</Card>
		</div>
	)
}

export default QuickNav
