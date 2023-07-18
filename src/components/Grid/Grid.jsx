/*
 * @Author: 二师弟
 * @Date: 2023-06-30 17:20:06
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 17:57:26
 * @Description: 网格组件
 */
import React from "react"
import Item from "./Item"

const Grid = (props) => {
	const { items, icon = false } = props

	return (
		<div className="grid grid-cols-3 m-[-1px]">
			{items.map((item) => (
				<Item
					key={item.name}
					name={item.name}
					title={item.title}
					sentence={item.sentence}
					text={item.text}
					date={item.date}
					icon={icon}
				/>
			))}
		</div>
	)
}

export default Grid
