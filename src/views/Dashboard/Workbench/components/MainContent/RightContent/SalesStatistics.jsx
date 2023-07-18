/*
 * @Author: 二师弟
 * @Date: 2023-06-30 19:53:55
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:43:04
 * @Description: Workbench 右侧内容 销售统计
 */
import React, { useEffect, useState } from "react"
import Card from "./../../../../../../components/Charts/Card"
import ReactECharts from "echarts-for-react"

const option = {
	tooltip: {
		show: true,
		trigger: "item",
	},
	legend: {
		top: "5%",
		left: "center",
		data: ["访问", "购买"],
	},
	radar: {
		indicator: [
			{ name: "2017", max: 100 },
			{ name: "2018", max: 100 },
			{ name: "2019", max: 100 },
			{ name: "2020", max: 100 },
			{ name: "2021", max: 100 },
			{ name: "2022", max: 100 },
		],
		radius: 80,
		center: ["50%", "60%"],
	},
	series: [
		{
			type: "radar",
			areaStyle: {
				opacity: 1,
				shadowColor: "rgba(0, 0, 0, 0.2)",
				shadowOffsetY: 5,
			},
			symbol: "none",
			data: [
				{
					value: [60, 50, 50, 55, 23, 50],
					name: "访问",
				},
				{
					value: [45, 70, 35, 30, 45, 25],
					name: "购买",
				},
			],
		},
	],
}

const SalesStatistics = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div>
			<Card title="销售统计" success={isSuccess} skeleton={true}>
				<ReactECharts option={option} />
			</Card>
		</div>
	)
}

export default SalesStatistics
