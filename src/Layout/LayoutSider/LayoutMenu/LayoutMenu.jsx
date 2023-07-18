/*
 * @Author: 二师弟
 * @Date: 2023-06-17 12:26:04
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 21:53:29
 * @Description: 描述
 */
import React, { useEffect, useState } from "react"
import { Menu } from "antd"
import routerList from "../../../Router"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const LayoutMenu = () => {
	// 侧边栏路由
	const getRouterSider = (list) => {
		// console.log(list)
		return list.map((item) => {
			return {
				key: item.key,
				// key: item.pathname,
				label: item.title,
				// label: React.createElement(Link),
				title: item.title,
				icon: item.icon ? React.createElement(item.icon) : "",
				children: item.children ? getRouterSider(item.children) : null,
			}
		})
	}

	// 所有路由
	const router = getRouterSider(routerList.filter((item, index) => !item.noMenu))

	const nav = useNavigate()
	// 侧边栏路由点击
	const routeClickHandler = ({ keyPath }) => {
		const path = keyPath.reverse().join("")
		nav(path)
	}

	const location = useLocation()

	// 当前 active 的菜单
	const [selectedKeys, setSelectedKeys] = useState()

	useEffect(() => {
		// 每次路由变化就更新 openKeys
		const select = location.pathname.split("/").map((item) => "/" + item)
		setSelectedKeys(select)
		setOpenKeys(select)
	}, [location])

	// 所有的一级路由
	const rootSubmenuKeys = routerList.map((item) => item.key)
	// 当前展开的菜单的 keys 数组
	const [openKeys, setOpenKeys] = useState()
	/**
	 * @description: 菜单点击后展开
	 * @param {*} keys
	 * @return {*}
	 */
	const onOpenChange = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
		// console.log(latestOpenKey)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}

	return (
		<Menu
			theme="dark"
			mode="inline"
			selectedKeys={selectedKeys}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			items={router}
			onClick={routeClickHandler}
		/>
	)
}

export default LayoutMenu
