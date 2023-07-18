/*
 * @Author: 二师弟
 * @Date: 2023-07-03 13:58:41
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-03 14:04:18
 * @Description: 使用 svg 图标
 */
import React from "react"
import { Collapse, Typography } from "antd"
import SvgIcon from "./../../../../components/SvgIcon"

const items = [
	{
		key: "1",
		label: "Svg Icon：使用 src/components/SvgIcon 组件即可",
		children: (
			<div className="flex justify-between">
				<SvgIcon name="Angular" className="w-10 h-10" />
				<SvgIcon name="chart" className="w-10 h-10" />
				<SvgIcon name="component" className="w-10 h-10" />
				<SvgIcon name="html" className="w-10 h-10" />
				<SvgIcon name="interview" className="w-10 h-10" />
				<SvgIcon name="JavaScript" className="w-10 h-10" />
				<SvgIcon name="panel" className="w-10 h-10" />
				<SvgIcon name="permission" className="w-10 h-10" />
			</div>
		),
		style: {
			backgroundColor: "#fff",
			borderRadius: 0,
		},
	},
]

const { Link } = Typography

const UseSvgIcon = () => {
	return (
		<div className="select-none mb-4">
			<Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
			<Link href="https://www.iconfont.cn/" target="_blank">
				更多 svg 下载
			</Link>
		</div>
	)
}

export default UseSvgIcon
