/*
 * @Author: 二师弟
 * @Date: 2023-06-27 17:15:15
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 21:04:53
 * @Description: 数据展示的卡片
 */
import React from "react"
import { Skeleton, Tabs } from "antd"
import { Tag, Typography } from "antd"

const { Link } = Typography

const Card = (props) => {
	const {
		title = "", //
		tag = "", //
		link = "",
		linkText = "",
		tab = false,
		success = true,
		skeleton = false,
	} = props
	const showTag = Boolean(tag)
	const showLink = Boolean(link)
	const showHeader = Boolean(title)

	const notProps = ["title", "tag", "link", "linkText", "tab", "success", "skeleton"]
	const newProps = {}
	for (const key in props) {
		if (!notProps.includes(key)) {
			newProps[key] = props[key]
		}
	}

	/**
	 * @description: 当传递的 Tab 参数为 true 时，返回这里的组件
	 * @return {*}
	 */
	const returnTab = () => {
		const className = "px-4 " + props.className || ""
		return <Tabs {...newProps} className={className} />
	}

	/**
	 * @description: 默认返回的组件，默认 Tab 参数为 false
	 * @return {*}
	 */
	const returnDefault = () => {
		return (
			<div className="h-full">
				{showHeader && (
					<div className="CardHeader flex items-center justify-between p-2 border-dark-900 border-solid border-b">
						<span>{title}</span>
						{showTag && <Tag color={props.color || "gold"}>{tag}</Tag>}
						{showLink && (
							<Link href={link} target="_blank">
								{linkText}
							</Link>
						)}
					</div>
				)}
				<div className={props.className}>{props.children}</div>
			</div>
		)
	}

	/**
	 * @description: 返回骨架屏
	 * @return {*}
	 */
	const returnSkeleton = () => {
		return (
			<div className="p-4">
				<Skeleton active></Skeleton>
			</div>
		)
	}

	const returnCard = () => {
		if (success) {
			if (!tab) return returnDefault()
			return returnTab()
		}
		if (skeleton) return returnSkeleton()
	}

	return <div className="w-full bg-white">{returnCard()}</div>
}

export default Card
