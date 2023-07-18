/*
 * @Author: 二师弟
 * @Date: 2023-06-20 18:37:24
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 12:58:02
 * @Description: 标签路由的每个小标签
 */
import React from "react"
import { CloseOutlined } from "@ant-design/icons"
import { useNavigate, useLocation } from "react-router-dom"

const TabNavTag = (props) => {
	const { path } = props
	const nav = useNavigate()
	const location = useLocation()

	const goPath = (e) => {
		// e.stopPropagation()
		nav(path)
	}

	const isActive = location.pathname === path ? true : false

	const delTag = (e) => {
		e.stopPropagation()
		const { tagsInfo, index } = props
		let path = ""
		if (isActive) {
			path = tagsInfo[index + 1] ? tagsInfo[index + 1].path : tagsInfo[index - 1].path
			nav(path)
		}
		props.onDel(index)
	}

	return (
		<>
			<span
				className={`TabNavTag h-7 border border-solid border-gray-300 text-[12px] mx-1 p-1 px-2 flex items-center cursor-pointer ${
					location.pathname === path ? "bg-[#1677ff] text-white tag-active" : ""
				}`}
				onClick={goPath}
				data-path={path}
				data-title={props.title}
			>
				<span className="whitespace-nowrap">{props.children}</span>
				{props.canDel && (
					<CloseOutlined
						className="h-full flex items-center ml-2 transition-all hover:rotate-[360deg]"
						onClick={delTag}
					/>
				)}
			</span>
		</>
	)
}

export default TabNavTag
