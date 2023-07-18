/*
 * @Author: 二师弟
 * @Date: 2023-06-30 16:21:25
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:42:15
 * @Description: Workbench 左侧内容第一个卡片
 */
import React, { useEffect, useState } from "react"
import Card from "./../../../../../../components/Charts/Card"
import Grid from "../../../../../../components/Grid/Grid"

const DATA = [
	{
		name: "github",
		title: "Github",
		sentence: "不要等待机会，而要创造机会。",
		text: "开源组",
		date: "2021-04-01",
	},
	{
		name: "vue",
		title: "Vue",
		sentence: "现在的你决定将来的你。",
		text: "算法组",
		date: "2021-04-01",
	},
	{
		name: "html",
		title: "Html",
		sentence: "没有什么才能比努力更重要。",
		text: "上班摸鱼",
		date: "2021-04-01",
	},
	{
		name: "Angular",
		title: "Angular",
		sentence: "热情和欲望可以突破一切难关。",
		text: "UI",
		date: "2021-04-01",
	},
	{
		name: "react",
		title: "React",
		sentence: "健康的身体是实现目标的基石。",
		text: "技术牛",
		date: "2021-04-01",
	},
	{
		name: "JavaScript",
		title: "Js",
		sentence: "路是走出来的，而不是空想出来的。",
		text: "架构组",
		date: "2021-04-01",
	},
]

const Project = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div className="mb-4">
			<Card
				title="项目"
				link="https://ant-design.antgroup.com/"
				linkText="更多"
				success={isSuccess}
				skeleton={true}
			>
				<Grid items={DATA} />
			</Card>
		</div>
	)
}

export default Project
