/*
 * @Author: 二师弟
 * @Date: 2023-07-03 14:44:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 17:50:26
 * @Description: 右键菜单功能
 */
import React, { useEffect, useMemo, useRef } from "react"
import useContextMenu from "../../../hooks/ContextMenu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { message } from "antd"
import PageContainer from "../../../components/PageContainer"

const RightClick = () => {
	const elRef = useRef(null)
	const [createContextMenu, removeContextMenu] = useContextMenu()

	const returnIcon = (icon) => {
		return <FontAwesomeIcon className="w-3 h-3" icon={icon} />
	}

	const menu = useMemo(() => {
		return [
			{
				key: "1",
				label: "new",
				icon: returnIcon(faPlus),
				children: [
					{
						key: "1-1",
						label: "new - 1",
						onClick: () => {
							message.success("new - 1")
						},
					},
					{
						key: "1-2",
						label: "new - 2",
						onClick: () => {
							message.success("new - 2")
						},
					},
				],
			},
			{
				key: "2",
				label: "open",
				icon: returnIcon(faBoxOpen),
				onClick: () => {
					message.success("open")
				},
			},
		]
	}, [])

	useEffect(() => {
		elRef.current.oncontextmenu = function (e) {
			e.preventDefault() // 阻止默认行为
			// 这里的 options 包含菜单内容配置，右键点击的坐标位置
			const options = { menu, coordinate: { x: e.clientX, y: e.clientY } }
			createContextMenu(options)
		}

		return () => {
			// 组件卸载时执行，移除右键菜单
			removeContextMenu()
		}
	}, [elRef, createContextMenu, removeContextMenu, menu])

	return (
		<PageContainer label="右键菜单">
			<div
				ref={elRef}
				className="bg-sky-50 h-[400px] relative flex items-center justify-center text-[20px]"
			>
				在这里点击右键
			</div>
		</PageContainer>
	)
}

export default RightClick
