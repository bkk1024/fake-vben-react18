/*
 * @Author: 二师弟
 * @Date: 2023-06-30 17:21:26
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 19:38:21
 * @Description: 网格组件每个小块，有两种状态，icon状态和有内容状态
 */
import React from "react"
import SvgIcon from "../SvgIcon"
import classes from "./Item.module.css"

const Item = (props) => {
	const { name, title, sentence, text, date, icon = false } = props

	/**
	 * @description: 默认组件，默认icon=false，即不是图标状态
	 * @return {*}
	 */
	const returnDefault = () => {
		return (
			<div className={`${classes.Item} !w-full p-6`}>
				<span className="flex">
					<SvgIcon name={name} className="w-[30px] h-[30px]" />
					<span className="text-lg ml-4">{title}</span>
				</span>
				<p className="flex mt-2 h-10 text-gray-400">{sentence}</p>
				<div className="flex justify-between text-gray-400">
					<span>{text}</span>
					<span>{date}</span>
				</div>
			</div>
		)
	}

	/**
	 * @description: icon=true时，图标状态
	 * @return {*}
	 */
	const returnIcon = () => {
		return (
			<div className={`${classes.Item} !w-full py-6`}>
				<span className="flex flex-col items-center">
					<SvgIcon name={name} className="w-[20px] h-[20px] mb-3" />
					<span className="text-md">{title}</span>
				</span>
			</div>
		)
	}

	return (
		<>
			{!icon && returnDefault()}
			{icon && returnIcon()}
		</>
	)
}

export default Item
