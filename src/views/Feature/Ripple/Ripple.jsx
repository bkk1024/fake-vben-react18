/*
 * @Author: 二师弟
 * @Date: 2023-07-04 21:02:01
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 22:37:31
 * @Description: 水波纹
 */
import React, { useRef } from "react"
import PageContainer from "../../../components/PageContainer"
import useRipple from "../../../hooks/Ripple"

const Ripple = () => {
	const { createRipple } = useRipple()
	const elRef = useRef(null)

	const clickHandler = (e) => {
		const x = e.nativeEvent.offsetX
		const y = e.nativeEvent.offsetY
		createRipple(elRef.current, { x, y })
	}

	return (
		<PageContainer label="水波纹示例">
			<div
				ref={elRef}
				className="w-96 h-96 rounded-3xl flex items-center justify-center text-[30px] bg-[#408ede] text-white"
				onClick={clickHandler}
			>
				水波纹
			</div>
		</PageContainer>
	)
}

export default Ripple
