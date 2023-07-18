/*
 * @Author: 二师弟
 * @Date: 2023-07-04 19:14:37
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:36:12
 * @Description: Modal 组件
 */
import React from "react"
import { Collapse, Modal } from "antd"
import AButton from "../../../../components/AButton"

const { info, success, warning, error } = Modal

const MyModal = () => {
	const msg = {
		info: {
			title: "Tip",
			content: "info",
			okButtonProps: {
				className: "bg-[#0960bd]",
			},
			okText: "确认",
		},
		success: {
			title: "Tip",
			content: "success",
			okButtonProps: {
				className: "bg-[#0960bd]",
			},
			okText: "确认",
		},
		warning: {
			title: "Tip",
			content: "warning",
			okButtonProps: {
				className: "bg-[#0960bd]",
			},
			okText: "确认",
		},
		error: {
			title: "Tip",
			content: "error",
			okButtonProps: {
				className: "bg-[#0960bd]",
			},
			okText: "确认",
		},
	}

	const items = [
		{
			key: "1",
			label: "Modal",
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

export default MyModal
