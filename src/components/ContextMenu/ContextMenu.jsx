/*
 * @Author: 二师弟
 * @Date: 2023-07-03 14:53:06
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-03 23:31:26
 * @Description: 右键菜单组件
 */
import React, { useEffect, useRef } from "react"

import { Menu } from "antd"

const ContextMenu = (props) => {
	const { coordinate, menu } = props
	const left = `${coordinate.x}px`
	const top = `${coordinate.y}px`

	const menuRef = useRef(null)

	useEffect(() => {
		menuRef.current.oncontextmenu = function (e) {
			e.stopPropagation()
		}
	}, [menuRef])

	return (
		<div
			ref={menuRef}
			className="absolute rounded-lg overflow-hidden min-w-[150px]"
			style={{
				left,
				top,
				boxShadow:
					"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
			}}
		>
			<Menu
				items={menu}
				mode="vertical"
				style={{
					border: "none",
				}}
			/>
		</div>
	)
}

export default ContextMenu
