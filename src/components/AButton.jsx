/*
 * @Author: 二师弟
 * @Date: 2023-07-05 13:43:00
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 18:48:27
 * @Description: 封装 antd Button 组件，因为使用了 tailwindcss，它会将 button 的背景颜色改为透明，因此 antd 的 Button 组件收到了一定影响
 */
import React from "react"
import { Button } from "antd"

const AButton = (props) => {
	const bgColor = {
		default: "bg-white ",
		info: "bg-[#909399] text-white hover:bg-[#909399]/80",
		primary: "bg-[#1677ff] text-white hover:bg-[#1677ff]/80",
		success: "bg-[#55d187] text-white hover:bg-[#55d187]/80",
		warning: "bg-[#efbd47] text-white hover:bg-[#efbd47]/80",
		danger: "bg-[#ed6f6f] text-white hover:bg-[#ed6f6f]/80",
	}
	const reClassName = () => {
		if (props.danger || props.disabled || props.ghost) {
			return props.className ? props.className : ""
		}
		let className = bgColor[props.type] + (props.className ? " " + props.className : "")
		if (props.loading) {
			className = "flex items-center " + className
		}
		return className
	}
	return (
		<Button {...props} className={reClassName()}>
			{props.children}
		</Button>
	)
}

export default AButton
