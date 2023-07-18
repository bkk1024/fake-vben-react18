/*
 * @Author: 二师弟
 * @Date: 2023-07-04 19:22:51
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:37:36
 * @Description: Notification 组件
 */
import React from "react"
import { Collapse, notification } from "antd"
import AButton from "../../../../components/AButton"

const { info, success, warning, error } = notification

const Notification = () => {
	const msg = {
		info: {
			message: "Tip",
			description: "info",
			duration: 1.5,
		},
		success: {
			message: "Tip",
			description: "success",
			duration: 1.5,
		},
		warning: {
			message: "Tip",
			description: "warning",
			duration: 1.5,
		},
		error: {
			message: "Tip",
			description: "error",
			duration: 1.5,
		},
	}

	const items = [
		{
			key: "1",
			label: "Notification",
			children: (
				<div>
					<AButton type="info" className="mr-3" onClick={() => info(msg["info"])}>
						Info
					</AButton>
					<AButton type="success" className="mr-3" onClick={() => success(msg["success"])}>
						Success
					</AButton>
					<AButton type="warning" className="mr-3" onClick={() => warning(msg["warning"])}>
						Warning
					</AButton>
					<AButton type="danger" className="mr-3" onClick={() => error(msg["error"])}>
						Error
					</AButton>
				</div>
			),
			style: {
				backgroundColor: "#fff",
				borderRadius: 0,
			},
		},
	]

	return <Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
}

export default Notification
