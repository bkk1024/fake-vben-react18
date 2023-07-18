/*
 * @Author: 二师弟
 * @Date: 2023-06-17 12:27:47
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 22:59:23
 * @Description: 描述
 */
import React from "react"
import { Layout } from "antd"
import classes from "./LayoutSider.module.css"
import logo from "../../assets/imgs/logo.png"
import LayoutMenu from "./LayoutMenu/LayoutMenu"
import { useSelector } from "react-redux"

const { Sider } = Layout

const LayoutSider = (props) => {
	const { isCollapsed } = useSelector((state) => state.layout)

	return (
		<Sider
			collapsible
			collapsed={isCollapsed}
			trigger={null}
			collapsedWidth="50"
			theme="dark"
			className={`h-screen fixed left-0 top-0 bottom-0 !max-w-[210px] ${
				isCollapsed ? "overflow-hidden" : ""
			}`}
		>
			<div className={classes.SiderLogo}>
				<img src={logo} alt="图片加载失败" />
				<h1 className="ml-2 text-xl">Vben Mine</h1>
			</div>
			<LayoutMenu />
		</Sider>
	)
}

export default LayoutSider
