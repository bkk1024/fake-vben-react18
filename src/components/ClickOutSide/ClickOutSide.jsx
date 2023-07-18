/*
 * @Author: 二师弟
 * @Date: 2023-07-04 14:00:27
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 16:23:56
 * @Description: 内外点击组件
 */
import React, { useEffect } from "react"

const ClickOutSide = (props) => {
	const { outsideHandler, children } = props

	useEffect(() => {
		document.addEventListener("click", outsideHandler, true)

		return () => {
			document.removeEventListener("click", outsideHandler, true)
		}
	}, [outsideHandler])

	return <div>{children}</div>
}

export default ClickOutSide
