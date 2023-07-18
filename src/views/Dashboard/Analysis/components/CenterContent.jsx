/*
 * @Author: 二师弟
 * @Date: 2023-06-29 15:43:27
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:40:23
 * @Description: Analysis 中间部分内容
 */

import React, { useRef, useLayoutEffect, useState, useEffect } from "react"
import Card from "../../../../components/Charts/Card"
import ReactECharts from "echarts-for-react"

const option1 = {
	legend: {
		data: ["Line 1", "Line 2"],
		left: "5%",
		top: "2%",
	},
	tooltip: {
		show: true,
		trigger: "axis",
		axisPointer: "grid",
		snap: true,
	},
	xAxis: {
		type: "category",
		data: [
			"6:00",
			"7:00",
			"8:00",
			"9:00",
			"10:00",
			"11:00",
			"12:00",
			"13:00",
			"14:00",
			"15:00",
			"16:00",
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
			"23:00",
			"24:00",
		],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			name: "Line 1",
			type: "line",
			stack: "Total",
			smooth: true,
			lineStyle: {
				width: 0,
			},
			areaStyle: {
				opacity: 0.8,
				color: "#2db3af",
			},
			data: [0, 0, 101, 164, 190, 240, 350, 200, 106, 200, 350, 300, 223, 145, 123, 80, 40, 10, 0],
		},
		{
			name: "Line 2",
			type: "line",
			stack: "Total",
			smooth: true,
			lineStyle: {
				width: 0,
			},
			areaStyle: {
				opacity: 0.8,
				color: "#92d5ff",
			},
			data: [0, 0, 201, 264, 290, 340, 420, 300, 206, 100, 250, 300, 423, 245, 123, 80, 40, 10, 0],
		},
	],
}

const option2 = {
	tooltip: {
		show: true,
	},
	xAxis: {
		type: "category",
		data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [1200, 2000, 1500, 800, 700, 1100, 1300, 2300, 2100, 1850, 1600, 1700],
			type: "bar",
		},
	],
}

const CenterContent = () => {
	const lineRef = useRef(null)
	const barRef = useRef(null)

	useLayoutEffect(() => {
		lineRef.current?.resize()
		barRef.current?.resize()
	}, [lineRef, barRef])

	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	const items = [
		{
			key: "1",
			label: `流量趋势`,
			children: <ReactECharts ref={lineRef} option={option1} />,
		},
		{
			key: "2",
			label: `访问量`,
			children: <ReactECharts ref={barRef} option={option2} />,
		},
	]

	return (
		<div className="top w-full mb-4 bg-sky-200">
			<Card tab={true} items={items} success={isSuccess} skeleton={true} />
		</div>
	)
}

export default CenterContent
