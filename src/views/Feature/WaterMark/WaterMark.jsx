/*
 * @Author: 二师弟
 * @Date: 2023-07-04 19:31:13
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:39:13
 * @Description: 水印
 */
import React, { useCallback, useRef } from "react"
import PageContainer from "../../../components/PageContainer"
import AButton from "../../../components/AButton"
import useWaterMark from "../../../hooks/WaterMark"

const WaterMark = () => {
	const { createWaterMark, removeWaterMark, resetWaterMark } = useWaterMark()

	const elRef = useRef(null)

	const create = useCallback(() => {
		const options = {
			content: "create",
		}
		createWaterMark(elRef.current, options)
	}, [createWaterMark])

	const clear = useCallback(() => {
		removeWaterMark(elRef.current)
	}, [removeWaterMark])

	const reset = useCallback(() => {
		const options = {
			content: "reset",
		}
		resetWaterMark(elRef.current, options)
	}, [resetWaterMark])

	return (
		<PageContainer label="水印示例">
			<div ref={elRef} className="absolute top-0 left-0 w-full h-full"></div>
			<AButton type="primary" className="mr-4" onClick={create}>
				create
			</AButton>
			<AButton type="danger" className="mr-4" onClick={clear}>
				clear
			</AButton>
			<AButton type="warning" className="mr-4" onClick={reset}>
				reset
			</AButton>
		</PageContainer>
	)
}

export default WaterMark
