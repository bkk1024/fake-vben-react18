/*
 * @Author: 二师弟
 * @Date: 2023-07-02 18:38:43
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-03 13:50:37
 * @Description: Antd icon组件使用
 */
import React from "react"
import { Collapse, Typography } from "antd"
import {
	GithubOutlined,
	WechatOutlined,
	AlipayCircleOutlined,
	QqOutlined,
	ZhihuOutlined,
	TwitterOutlined,
	GooglePlusOutlined,
	CodepenCircleOutlined,
} from "@ant-design/icons"

const items = [
	{
		key: "1",
		label: "Antv Icon：直接按需引入相应组件即可使用",
		children: (
			<div className="flex justify-between">
				<GithubOutlined className="text-[30px]" />
				<WechatOutlined className="text-[30px]" />
				<AlipayCircleOutlined className="text-[30px]" />
				<QqOutlined className="text-[30px]" />
				<ZhihuOutlined className="text-[30px]" />
				<TwitterOutlined className="text-[30px]" />
				<GooglePlusOutlined className="text-[30px]" />
				<CodepenCircleOutlined className="text-[30px]" />
			</div>
		),
		style: {
			backgroundColor: "#fff",
			borderRadius: 0,
		},
	},
]

const { Link } = Typography

const AntdIcon = () => {
	return (
		<div className="select-none mb-4">
			<Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
			<Link href="https://ant-design.antgroup.com/components/icon-cn" target="_blank">
				更多 Antd 图标
			</Link>
		</div>
	)
}

export default AntdIcon
