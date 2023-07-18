import React, { useEffect, useRef, useState } from "react"
import Card from "./../../../../components/Charts/Card"
import ReactECharts from "echarts-for-react"

const option1 = {
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
			{ name: "电脑", max: 100 },
			{ name: "充电器", max: 100 },
			{ name: "耳机", max: 100 },
			{ name: "手机", max: 100 },
			{ name: "Ipad", max: 100 },
			{ name: "键盘", max: 100 },
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

const option2 = {
	tooltip: {
		trigger: "item",
	},
	legend: {
		top: "5%",
		left: "center",
	},
	series: [
		{
			name: "访问来源",
			type: "pie",
			radius: ["40%", "70%"],
			top: "20%",
			avoidLabelOverlap: false,
			itemStyle: {
				borderRadius: 10,
				borderColor: "#fff",
				borderWidth: 2,
			},
			label: {
				show: false,
				position: "center",
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 20,
					fontWeight: "bold",
				},
			},
			labelLine: {
				show: false,
			},
			data: [
				{ value: 1048, name: "搜索引擎" },
				{ value: 735, name: "直接访问" },
				{ value: 580, name: "邮件营销" },
				{ value: 484, name: "联盟广告" },
			],
		},
	],
}

const option3 = {
	tooltip: {
		trigger: "item",
	},
	series: [
		{
			name: "成交占比",
			type: "pie",
			radius: "55%",
			center: ["50%", "50%"],
			data: [
				{ value: 335, name: "电子产品" },
				{ value: 310, name: "家具" },
				{ value: 274, name: "服装" },
				{ value: 235, name: "化妆品" },
			].sort(function (a, b) {
				return a.value - b.value
			}),
			roseType: "radius",
			labelLine: {
				smooth: 0.2,
				length: 10,
				length2: 20,
			},
			itemStyle: {
				color: (params) => {
					const colors = ["#2ec7c9", "#67e0e3", "#b6a2de", "#5ab1ef"]
					return colors[params.dataIndex]
				},
			},
			animationType: "scale",
			animationEasing: "elasticOut",
			animationDelay: function (idx) {
				return Math.random() * 200
			},
		},
	],
}

const BottomContent = () => {
	const radarRef = useRef(null)
	const pieRef1 = useRef(null)
	const pieRef2 = useRef(null)
	useEffect(() => {
		radarRef.current?.resize()
		pieRef1.current?.resize()
		pieRef2.current?.resize()
	}, [radarRef, pieRef1, pieRef2])

	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div className="md:flex enter-y">
			<div className="md:w-1/3 w-full md:mr-4 md:mb-4">
				<Card showTag={false} title="转化率" success={isSuccess} skeleton={true}>
					<ReactECharts ref={radarRef} option={option1} />
				</Card>
			</div>
			<div className="md:w-1/3 w-full md:mr-4 md:mb-4">
				<Card showTag={false} title="访问来源" success={isSuccess} skeleton={true}>
					<ReactECharts ref={pieRef1} option={option2} />
				</Card>
			</div>
			<div className="md:w-1/3 w-full">
				<Card showTag={false} title="成交占比" success={isSuccess} skeleton={true}>
					<ReactECharts ref={pieRef2} option={option3} />
				</Card>
			</div>
		</div>
	)
}

export default BottomContent
