/*
 * @Author: 二师弟
 * @Date: 2023-07-04 16:33:01
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:30:07
 * @Description: 文本复制
 */
import React, { useState } from "react"
import PageContainer from "../../../components/PageContainer"
import { Collapse, Space, Input } from "antd"
import useCopyText from "../../../hooks/CopyText"
import { message } from "antd"
import AButton from "../../../components/AButton"

const TextCopy = () => {
	const [value, setValue] = useState("")
	const { copyText } = useCopyText()

	const inputChangeHandler = (e) => {
		setValue(e.target.value)
	}

	const copyHandler = () => {
		const isSuccess = copyText(value)
		if (isSuccess) {
			message.success("复制成功")
		} else {
			message.error("复制失败")
		}
	}

	const items = [
		{
			key: "1",
			label: "文本复制",
			children: (
				<Space.Compact
					style={{
						width: "100%",
					}}
				>
					<Input placeholder="输入要复制内容" value={value} onChange={inputChangeHandler} />
					<AButton type="primary" onClick={copyHandler}>
						copy
					</AButton>
				</Space.Compact>
			),
			style: {
				backgroundColor: "#fff",
				borderRadius: 0,
			},
		},
	]

	return (
		<PageContainer label="文本复制示例">
			<Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
		</PageContainer>
	)
}

export default TextCopy
