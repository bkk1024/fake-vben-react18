/*
 * @Author: 二师弟
 * @Date: 2023-07-04 18:14:07
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:34:51
 * @Description: Confirm 组件
 */
import React from "react"
import { Collapse } from "antd"
import AButton from "../../../../components/AButton"
import useConfirm from "../../../../hooks/Confirm"

const Confirm = () => {
	const { info, success, warning, error } = useConfirm()

	const msg = {
		info: {
			title: "Tip",
			content: "info",
		},
		success: {
			title: "Tip",
			content: "success",
		},
		warning: {
			title: "Tip",
			content: "warning",
		},
		error: {
			title: "Tip",
			content: "error",
		},
	}

	const items = [
		{
			key: "1",
			label: "Confirm",
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

export default Confirm
