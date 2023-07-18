/*
 * @Author: 二师弟
 * @Date: 2023-07-05 13:40:13
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 18:47:02
 * @Description: 全屏
 */
import React, { useRef } from "react"
import PageContainer from "../../../components/PageContainer"
import AButton from "../../../components/AButton"
import { useFullscreen } from "@reactuses/core"

const FullScreen = () => {
	const bodyRef = useRef(document.body)

	// 使 body 全屏
	// useFullscreen 钩子返回的数组中的第一个参数是是否全屏
	const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
		useFullscreen(bodyRef)

	const elRef = useRef(null)

	const [, { enterFullscreen: enterDOMFull, exitFullscreen: exitDOMFull }] = useFullscreen(elRef)

	return (
		<PageContainer label="全屏示例" desc={isFullscreen ? "全屏模式" : "非全屏模式"}>
			<div>
				<AButton type="primary" className="mr-3" onClick={enterFullscreen} disabled={isFullscreen}>
					点击进入全屏
				</AButton>
				<AButton type="danger" className="mr-3" onClick={exitFullscreen}>
					点击退出全屏
				</AButton>
				<AButton type="success" onClick={toggleFullscreen}>
					切换全屏模式
				</AButton>
			</div>
			<br />
			<div>
				<AButton type="primary" onClick={enterDOMFull}>
					点击使DOM元素进入全屏模式
				</AButton>
			</div>
			<br />
			<div ref={elRef} className="w-[300px] h-[300px] flex items-center justify-center bg-white">
				<AButton type="primary" onClick={exitDOMFull}>
					退出DOM元素全屏模式
				</AButton>
			</div>
		</PageContainer>
	)
}

export default FullScreen
