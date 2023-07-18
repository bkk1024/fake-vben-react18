/*
 * @Author: 二师弟
 * @Date: 2023-07-02 21:03:11
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-03 13:57:01
 * @Description: FontAwesome 图标使用组件
 */
import React from "react"
import { Collapse, Typography } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faPlus,
	faHouse,
	faUser,
	faDownload,
	faMusic,
	faStar,
	faHeart,
	faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons"

const items = [
	{
		key: "1",
		label: "FontAwesome Icon：安装相关依赖后导入使用",
		children: (
			<div className="flex justify-between">
				<FontAwesomeIcon icon={faPlus} className="text-[25px]" />
				<FontAwesomeIcon icon={faHouse} className="text-[25px]" />
				<FontAwesomeIcon icon={faUser} className="text-[25px]" />
				<FontAwesomeIcon icon={faDownload} className="text-[25px]" />
				<FontAwesomeIcon icon={faMusic} className="text-[25px]" />
				<FontAwesomeIcon icon={faStar} className="text-[25px]" />
				<FontAwesomeIcon icon={faHeart} className="text-[25px]" />
				<FontAwesomeIcon icon={faWandMagicSparkles} className="text-[25px]" />
			</div>
		),
		style: {
			backgroundColor: "#fff",
			borderRadius: 0,
		},
	},
]

const { Link } = Typography

const FaIcon = () => {
	return (
		<div className="select-none mb-4">
			<Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
			<Link href="https://fontawesome.com/search?m=free&o=r" target="_blank">
				更多 FontAwesome 图标
			</Link>
		</div>
	)
}

export default FaIcon
