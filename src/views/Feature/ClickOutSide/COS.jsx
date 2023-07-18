/*
 * @Author: 二师弟
 * @Date: 2023-07-04 13:52:30
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 16:24:38
 * @Description: 判断内部或者外部点击
 */
import React, { useState } from "react"
import ClickOutSide from "../../../components/ClickOutSide/ClickOutSide"
import PageContainer from "../../../components/PageContainer"

const COS = () => {
	const [text, setText] = useState("Click")

	const innerClick = () => {
		setText("inner Click")
	}
	const outsideClick = (e) => {
		setText("outside Click")
	}

	return (
		<PageContainer label="点击内外部触发事件">
			<ClickOutSide outsideHandler={outsideClick}>
				<div
					className="flex items-center justify-center w-full h-[300px] bg-sky-200 text-[30px]"
					onClick={innerClick}
				>
					<p>{text}</p>
				</div>
			</ClickOutSide>
		</PageContainer>
	)
}

export default COS
