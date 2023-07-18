/*
 * @Author: 二师弟
 * @Date: 2023-06-30 18:25:14
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 19:00:52
 * @Description: 列表组件
 */
import React from "react"
import Item from "./Item"

const List = (props) => {
	const { items } = props

	return (
		<ul className="max-h-[800px] min-h-[400px] p-6 overflow-auto">
			{items.map((item, index) => (
				<Item key={index} content={item} />
			))}
		</ul>
	)
}

export default List
