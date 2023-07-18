/*
 * @Author: 二师弟
 * @Date: 2023-07-04 17:54:11
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:33:03
 * @Description: Message 组件
 */
import React from "react"
import { Collapse, message } from "antd"
import AButton from "../../../../components/AButton"

const { info, success, warning, error, loading, destroy } = message

const Message = () => {
	const items = [
		{
			key: "1",
			label: "Message",
			children: (
				<div>
					<AButton type="info" className="mr-3" onClick={() => info("Info")}>
						Info
					</AButton>
					<AButton type="success" className="mr-3" onClick={() => success("success")}>
						Success
					</AButton>
					<AButton type="warning" className="mr-3" onClick={() => warning("warning")}>
						Warning
					</AButton>
					<AButton type="danger" className="mr-3" onClick={() => error("error")}>
						Error
					</AButton>
					<AButton
						type="primary"
						className="mr-3"
						onClick={() => loading({ content: "loading", key: "loadingMsg", duration: 0 })}
					>
						Loading
					</AButton>
					<AButton type="primary" className="mr-3" onClick={() => destroy("loadingMsg")}>
						loading 关闭
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

export default Message
