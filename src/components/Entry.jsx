/*
 * @Author: 二师弟
 * @Date: 2023-06-30 15:30:16
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 17:39:06
 * @Description: 带进入动画的组件，x 轴的动画
 */
import React from "react"

const Entry = (props) => {
	// 默认从右到左进入
	const { direction = "l", delay = 0 } = props
	const animation = delay
		? `animate-[itemEntryX_0.5s_${delay}s_forwards]`
		: "animate-[itemEntryX_0.5s_forwards]"

	return (
		<div
			className={`${
				direction === "l"
					? "opacity-0 translate-x-[10%]"
					: direction === "r"
					? "opacity-0 translate-x-[-10%]"
					: ""
			} ${animation}`}
		>
			{props.children}
		</div>
	)
}

export default Entry
