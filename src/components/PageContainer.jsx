/*
 * @Author: 二师弟
 * @Date: 2023-07-04 14:10:37
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 18:28:47
 * @Description: 公共的页面组件
 */
import React from "react"
import { useSelector } from "react-redux"

const PageContainer = (props) => {
	const layout = useSelector((state) => state.layout)

	return (
		<div className="border-t">
			<div className="bg-white p-4">
				<h1 className="text-2xl font-bold mb-3">{props.label}</h1>
				{Boolean(props.desc) && <p className="text-gray-400">{props.desc}</p>}
			</div>
			<div className="p-4">{props.children}</div>
			{Boolean(props.footer) && (
				<div
					className="fixed bottom-0 right-0"
					style={{
						width: `calc(100% - ${layout.isCollapsed ? 50 : 200}px)`,
						transition: "width 0.2s",
					}}
				>
					{props.footer}
				</div>
			)}
		</div>
	)
}

export default PageContainer
