/*
 * @Author: 二师弟
 * @Date: 2023-07-07 17:23:26
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 17:45:21
 * @Description: 转账信息
 */
import React from "react"
import { Tag } from "antd"

const TransferInfo = (props) => {
	return (
		<div className={props.className}>
			<p className="my-4">付款账户：{props.pay}</p>
			<p className="my-4">
				收款账户：{props.receive}
				<Tag color="green" className="ml-3">
					{props.receiveType}
				</Tag>
			</p>
			<p className="my-4">收款人姓名：{props.receiver}</p>
			<p className="my-4">转账金额：{props.amount}元</p>
		</div>
	)
}

export default TransferInfo
