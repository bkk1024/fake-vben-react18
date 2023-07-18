/*
 * @Author: 二师弟
 * @Date: 2023-07-04 19:41:35
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 20:44:43
 * @Description: 创建水印钩子
 */
import ReactDOM from "react-dom/client"
import React from "react"
import { Watermark } from "antd"

const useWaterMark = () => {
	let _container = null
	let _root = null

	const createWaterMark = (element, options) => {
		if (!_container) {
			_container = document.createElement("div")
			_container.setAttribute("style", "height:100%")
			element.appendChild(_container)
		}
		if (!_root) {
			_root = ReactDOM.createRoot(_container)
		}
		const defaultOptions = {
			style: {
				width: "100%",
				height: "100%",
			},
		}
		const watermark = React.createElement(Watermark, { ...defaultOptions, ...options })
		_root.render(watermark)
	}

	const removeWaterMark = (element) => {
		if (_container && _root) {
			element.removeChild(_container)
			_container = null
			_root = null
		}
	}

	const resetWaterMark = (element, options) => {
		removeWaterMark(element)
		createWaterMark(element, options)
	}

	return { createWaterMark, removeWaterMark, resetWaterMark }
}

export default useWaterMark
