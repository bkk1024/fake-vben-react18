/*
 * @Author: 二师弟
 * @Date: 2023-06-17 13:04:17
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-01 21:55:28
 * @Description: 顶部header
 */
import React from "react"
import { Layout, theme, Breadcrumb } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { setIsCollapsed } from "../../store/layout/layoutSlice"
import { useLocation } from "react-router-dom"
import routerList from "../../Router"
import UserInfo from "./UserInfo/UserInfo"
import TabNav from "./../../components/TabNav/TabNav"

const { Header } = Layout

const LayoutHeader = () => {
	/**
	 * @description: 生成路由path和title的映射表
	 * @param {*} list
	 * @return {*}
	 */
	const returnMap = (list) => {
		let pathTitleMap = {}
		list.forEach((item) => {
			if (item.key) {
				pathTitleMap[item.key] = item.title
				if (item.children) {
					pathTitleMap = {
						...pathTitleMap,
						...returnMap(item.children),
					}
				}
			}
		})
		return pathTitleMap
	}
	const pathTitleMap = returnMap(routerList)

	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const layoutState = useSelector((state) => state.layout)
	const dispatch = useDispatch()

	const location = useLocation()
	const nowRoute = location.pathname.split("/").filter((item) => item !== "")

	/**
	 * @description: 生成面包屑内容
	 * @param {*} nowRoute
	 * @return {*}
	 */
	const getItems = (nowRoute) => {
		const items = []
		nowRoute.forEach((nr) => {
			items.push({
				title: pathTitleMap[`/${nr}`],
			})
		})
		return items
	}
	const breadcrumbItems = getItems(nowRoute)

	return (
		<Header
			className="h-auto p-0 flex flex-col"
			style={{
				background: colorBgContainer,
			}}
		>
			<div className="relative pl-3 h-12 flex items-center">
				{/* 点击侧边栏收缩 */}
				<span
					className="h-full flex items-center cursor-pointer"
					onClick={() => dispatch(setIsCollapsed())}
				>
					{layoutState.isCollapsed ? (
						<MenuUnfoldOutlined
							style={{
								fontSize: "1rem",
							}}
						/>
					) : (
						<MenuFoldOutlined
							style={{
								fontSize: "1rem",
							}}
						/>
					)}
				</span>
				{/* 面包屑 */}
				<Breadcrumb className="m-4" items={breadcrumbItems}></Breadcrumb>
				{/* 用户信息 */}
				<UserInfo />
			</div>
			<TabNav />
		</Header>
	)
}

export default LayoutHeader
