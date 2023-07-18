/*
 * @Author: 二师弟
 * @Date: 2023-07-07 21:57:41
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 21:59:32
 * @Description: 生成 Form 的 Item
 */
import React from "react"
import { Col, Form } from "antd"

const { Item } = Form

const FormItem = (props) => {
	const { col, item, children } = props

	return (
		<Col {...col} key={item.name}>
			<Item {...item}>{children}</Item>
		</Col>
	)
}

export default FormItem
