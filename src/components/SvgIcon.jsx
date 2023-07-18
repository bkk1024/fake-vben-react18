/*
 * @Author: 二师弟
 * @Date: 2023-06-29 13:55:44
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-03 14:01:08
 * @Description: SvgIcon 组件，使用 svg 文件
 */
import React, { memo } from "react"
import "../assets/svgs/index.js"

const SvgIcon = memo((props) => {
	// 这里的 name 即是要使用的 Svg 文件的文件名
	const { className, svgClick, name } = props

	return (
		<svg className={className || ""} onClick={svgClick}>
			<use xlinkHref={"#icon-" + name}></use>
		</svg>
	)
})

export default SvgIcon
